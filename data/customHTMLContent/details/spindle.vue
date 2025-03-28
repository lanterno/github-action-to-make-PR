<template>
  <h4>Machine Learning</h4>

  <p>
    Machine learning allows computers to make choices without being explicitly programmed for each case. As this field
    is quite enormous, we will only talk about
    <a href="https://en.wikipedia.org/wiki/Supervised_learning">supervised learning</a>, a special case of machine
    learning, which happens to be the one shown in the demonstrator.
  </p>

  <p>
    Supervised machine learning tries to match inputs to outputs, by finding links between both. First, the program is
    given a list of known links, with that, it creates what is called a "model" of the data, which can be used to
    determine what would probably be the output based solely on the inputs.
    <br />
    For example, imagine that you want to determine what will be the color of a pen based on some of its features. You
    first collect the products you can find locally and put them in the table below.
  </p>

  <style type="text/css">
    table {
      width: 100%;
      border-collapse: collapse;
    }
    td {
      text-align: center;
    }
  </style>

  <table>
    <colgroup>
      <col span="3" />
      <col />
    </colgroup>
    <thead>
      <tr style="border-bottom: solid">
        <th>Producer</th>
        <th>Length</th>
        <th>Price</th>
        <th>Color</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Pen corp</td>
        <td>12 cm</td>
        <td>1 CHF</td>
        <td>Red</td>
      </tr>
      <tr>
        <td>Pentastic</td>
        <td>15 cm</td>
        <td>1.20 CHF</td>
        <td>Black</td>
      </tr>
      <tr>
        <td>Pentastic</td>
        <td>10 cm</td>
        <td>0.70 CHF</td>
        <td>Red</td>
      </tr>
      <tr>
        <td>Pen of chaos</td>
        <td>20 cm</td>
        <td>3 CHF</td>
        <td>Black</td>
      </tr>
    </tbody>
  </table>

  <p>By manually analysing it, you can find some relations</p>

  <ul>
    <li>Pen corp only produces red pens</li>
    <li>Pen of chaos only produces black pens</li>
    <li>The pen is red if its price is below or equal to 1 CHF, else it is black</li>
    <li>The pen is red if its length is below or equal to 12 cm, else it is black</li>
  </ul>

  <p>
    It is already a bit cumbersome to determine theses relations, and that's only for 4 products. Imagine having
    hundreds of producers, thousands of products and many other features.
    <br />
    That's where using
    <a href="https://en.wikipedia.org/wiki/Unsupervised_learning">unsupervised machine learning</a>
    helps: it discovers by itself the relations between the product features, creating a "model" representing the data.
    The output is not as readable as a human would do but takes much less time.
    <br />
    Usually, the model has a certain accuracy, as the whole data can rarely be transformed in a single relation, so
    someone using it for prediction has to be aware that it might return wrong results. It also only tries to reproduce
    what happened and can't predict the future. For example, if a producer wants to make cheap black pens, the model
    will misbehave, stating that the pen will be red as all the previously seen cheap pens are red.
  </p>

  <h4>Homomorphic Cryptography</h4>

  <p>
    Cryptography is the science of encoding a message so that only the intended recipient can decode it. It is used
    throughout computer science, when you log into your computer, you connect to a website or even when you receive a
    phone call.
    <br />
    To ensure that no malicious intermediary can decode the message, the sender and the receiver have to share some kind
    of secret, such as a passphrase. As such, even if someone intercepts the encoded message, they'll be unable to
    decode it without this secret.
  </p>

  <p>
    Let's create a very simple cryptography system which can only encode digits from 0 to 9. We associate each digit to
    another digit in the same range, shifting it by a certain number, in this case 4. This number of shifts is actually
    the secret that needs to be shared with the receiver.
  </p>

  <table>
    <tbody>
      <tr style="border-bottom: thin solid">
        <th scope="row">digit in clear</th>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
      </tr>
      <tr>
        <th scope="row">encoded digit</th>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>
    </tbody>
  </table>

  <p>
    For example, if you want to send 7 to someone, you'll first encode it as 1 and send it to the receiver, who will
    decode it back to 7. This way, we are able to send a message, so that only the person having the secret can decode
    it.
  </p>

  <p>
    Homomorphic encryption is a special kind of encryption where when you apply a mathematical operation between two
    encoded message, it will be the same as doing this operation on the decoded messages. Let's say you want to find out
    the sum of some encoded message, you can add theses messages and decode the resulting one to obtain the sum, as if
    the messages weren't encoded in the first place.
    <br />
    The cryptographic system we defined before is <i>not</i> homomorphic. As an exercise left to the reader, you can try
    to add two clear messages (0 + 1 = 1) and see if their encrypted counterpart are decoded correctly (4 + 5 = 9).
  </p>

  <p>
    The maths behind many homomorphic encryption systems are very complex and won't be explained here. Let's say that
    the current state-of-the-art homomorphic encryption systems support both addition and multiplication.
  </p>
</template>
