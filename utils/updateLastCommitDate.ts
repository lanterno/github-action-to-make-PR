/*
A script to update the last commit date for all projects that have a code repository.
The script uses the GitHub API to retrieve the relevant date.
*/

import fs from "fs/promises";
import path from "path";
import yaml from "yaml";
import type { Projects } from "../types/projects";

const DATA_DIR = "./data";
const PRODUCTS_DIR = "customHTMLContent";
const PROJECTS_FILE = "projects.yaml";

async function getProjectFilesPaths(): Promise<string[]> {
    const allEntries = await fs.readdir(DATA_DIR, { withFileTypes: true });
    const projectLabsDirectories = allEntries
        .filter((entry) => entry.isDirectory() && entry.name !== PRODUCTS_DIR)
        .map((entry) => path.join(DATA_DIR, entry.name, PROJECTS_FILE));

    return projectLabsDirectories;
}

async function readProjectsFromFile(filePath: string): Promise<Projects> {
    const fileContent = await fs.readFile(filePath, "utf-8");
    return yaml.parse(fileContent) as Projects;
}

/**
 * A minimal interface to represent the piece of data we need from the GitHub API.
 * Adjust fields as needed if you want more data from the commit object.
 */
interface GitHubCommit {
    commit: {
        author: {
            date: string;
        };
    };
}

/**
 * Fetches the latest commit date in YYYY-MM-DD format from the provided GitHub repository URL.
 * Returns null if the data cannot be retrieved for any reason.
 */
async function getProjectLastCommitDate(gitRepo: string): Promise<string | null> {
    // Attempt to extract "owner/repo" from the provided repository URL
    const stripped = gitRepo.replace(/^https?:\/\/github\.com\//, "");
    const [owner, repo] = stripped.split("/");

    // Basic validation
    if (!owner || !repo) {
        console.error(`Invalid GitHub URL: ${gitRepo} . Ensure it follows "https://github.com/owner/repo" format.`);
        return null;
    }

    const commitsURL = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`;

    try {
        console.log(`using github token: ${process.env.GITHUB_TOKEN}`);
        const response = await fetch(commitsURL, {
            headers: {
                Accept: "application/vnd.github.v3+json",
                // Ensure GITHUB_TOKEN is set in your environment
                Authorization: `Bearer ${process.env.GITHUB_TOKEN ?? ""}`
            }
        });

        // Check for non-success responses (e.g., 404 for private repos or invalid tokens)
        if (!response.ok) {
            console.error(`Failed to get commits for: ${gitRepo}. HTTP status: ${response.status} - ${response.statusText} - ${await response.text()}`);
            return null;
        }

        // Convert the response to JSON; typed as an array with a minimal commit structure
        const commits = (await response.json()) as GitHubCommit[];

        if (!Array.isArray(commits) || commits.length === 0) {
            console.error(`No commits found for: ${gitRepo}.`);
            return null;
        }

        // Extract the date in "YYYY-MM-DD" format
        const lastCommitDate = commits[0]?.commit?.author?.date;
        if (!lastCommitDate) {
            console.error(`Could not retrieve commit date from: ${gitRepo}`);
            return null;
        }

        return lastCommitDate.split("T")[0];
    } catch (error) {
        console.error(`Error fetching commit for repo: ${gitRepo}`);
        console.error(error);
        return null;
    }
}

async function updateProjectFile(filePath: string, labProjects: Projects): Promise<void> {
    const yamlString = yaml.stringify(labProjects);
    await fs.writeFile(filePath, yamlString, "utf-8");
}

/**
 * Iterates through all project YAML files found in the DATA_DIR,
 * updating the date_last_commit for each project that has a code repository specified.
 */
async function updateLastCommitDate(): Promise<void> {
    let updatedProjectsCount = 0;

    const projectsPaths = await getProjectFilesPaths();

    for (const projectsPath of projectsPaths) {
        const labProjects = await readProjectsFromFile(projectsPath);

        for (const [projectId, project] of Object.entries(labProjects.projects)) {
            const gitUrl = project.code?.url;
            if (!gitUrl) {
                console.warn(`No repository URL found for project: ${projectId}`);
                continue; // Skip if no repository URL is provided
            }

            const lastCommitDate = await getProjectLastCommitDate(gitUrl);
            if (!lastCommitDate) {
                continue;
            }

            project.code.date_last_commit = lastCommitDate;
            labProjects.projects[projectId] = project;
            updatedProjectsCount++;
        }

        // Update the YAML file with new data for every project in the file
        await updateProjectFile(projectsPath, labProjects);
    }

    console.log(`Checked and updated ${updatedProjectsCount} projects.`);
}

/**
 * Runs the update process.
 * We wrap it in an immediately-invoked async function to handle any top-level errors and exit cleanly.
 */
(async function main() {
    try {
        await updateLastCommitDate();
    } catch (error) {
        console.error("An unexpected error occurred while updating last commit dates.");
        console.error(error);
        process.exit(1);
    }
})();
