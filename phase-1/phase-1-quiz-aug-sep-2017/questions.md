# Enrollment Assessment

Concepts/topics to cover:

- Basic JS knowledge
- Computational thinking
- HTML/CSS knowledge

## JS - Coding Challenges

Use pre-built HackerRank challenges:

- Merge Strings
- Cupcake Feast

## Comp Thinking - Word problems w/ Multiple Choice

### Encoding and decoding

The code for the word "BIRD" is `CJSE`.
The code for the word "COUNTRY" is `DPVOUSZ`.
The code for the word "HOT" is `IPU`.

What is the code for "SAMBA"?

1. TZLBZ
2. TBNCB
3. FNZON
4. TBMCD
5. RZLAZ

What word does the code `BXFTPNF` represent?

[answers: 2, 'AWESOME']

_What is this testing? Writing programs involves a lot of symbolic representation: using one set of things to represent another. Being able to work with symbols and values, and to translate between them, is a key mental capacity for programming._

### Sequence evaluation

[uses `grid-exercise.png`]

You control the triangle in the above graphic. Your objective is to collect all of the gold stars by moving the triangle over them.

You can send it 3 kinds of commands: MOVE will make it more forward one square, TURNL will make it turn left, and TURNR will make it turn right.

Which of the following sequences of commands will make the triangle cross over _every_ gold star?

1. TURNR, 4x MOVE, TURNL, 3x MOVE, TURNL, 7x MOVE, TURNR, 4x MOVE
2. 7x MOVE, TURNL, 2x MOVE, TURNL, 3x MOVE, TURNL, 6x MOVE, TURNR, 3x MOVE
3. 3x MOVE, TURNL, 2x MOVE, TURNR, 4x MOVE, TURNR, 5x MOVE, TURNR, 6x MOVE, TURNL, 1x MOVE
4. 7x MOVE, TURNL, 2x MOVE, TURNL, 4x MOVE, TURNL, 6x MOVE, TURNR, 2x MOVE

[answers: 3, 4]

### Conditionals and logical reasoning

A grocery store uses stickers to categorize and label their goods.

For fresh produce (fruits and vegetables), the stickers are circular. For meat, fish, and poultry, the stickers are square. For all other products, the stickers are diamond-shaped.

The stickers for organic food are green; for conventional food they are blue.

Items that are available for purchase with food stamps have a `#` printed on their stickers.

If the food was produced locally, the sticker will have an `l`. If it was produced in another state in the US, it will have the letter `u`. Imported items are demarcated by an `i` on the sticker.

If the item is on sale, all letters on the sticker will be printed in uppercase.

What would the sticker look like for an imported organic banana that can be purchased with food stamps, but is not on sale?

1. Green square with `#i` on the label
2. Green circle with `#i` on the label
3. Blue circle with `#L` on the label
4. Green circle with `I` on the label

What sticker would you use for conventional salmon raised locally that are on sale and available for purchase with food stamps?

[answers: 2, "blue square with `#L`"]

### Manipulating and storing values

|       | A | B | C | D | E |
|:------|:--|:--|:--|:--|:--|
| **1** | 5 | 9 | 2 | 7 |   |
| **2** | 2 | 3 | 4 | 1 |   |
| **3** | 3 | 7 | 2 | 6 |   |
| **4** | 6 | 1 | 5 | 6 |   |

Use the table above to solve the following problem.

- Add B2 (3) to D3 (6). Put the result in E1. (9)
- Multiply A4 (6) by C3 (2). Put the result in E2. (12)
- Subtract D2 (1) from E1 (9). Replace E1 with the result. (8)

What is the sum of E1 (8) and E2 (12)? (20)

1. 20
2. 17
3. 4
4. 24

[answer: 1]

## HTML/CSS - Multiple Choice

### What type of tag is this: `<br />`?
A. Line break tag
B. A broken one
C. An opening tag

[answer: A]

### Is `<p>` an opening tag or a closing tag?
A. Opening
B. Closing

[answer: A]

### Which of these sentences correctly describes the following code?

```html
<li class="entry">
  Apples
</li>
```

A. It is a class tag with an id of "entry" and containing the text "Apples".
B. It is a list item tag with a class attribute set to the value "entry" and containing the text "Apples".
C. It is a section tag with an entry type of "class". The text "Apples" is inside of this tag.
D. None of the above.

[answer: B]

### Which attribute is used to specify the image file for an `<img>` tag?
A. `href`
B. `id`
C. `file`
D. `src`

[answer: D]

### How would adding the following HTML to a page change the page?

```html
<a href="https://www.twitter.com/LearnersGuildUS" title="Learners Guild on Twitter">Twitter</a>
```

A. It would alter the title of the page to "Learners Guild on Twitter"
B. It would show a link with the text "Twitter" that points to the Learners Guild profile page on Twitter
C. It would redirect the page to the URL specified in the `href` attribute
D. It would show a link with the text "Learners Guild on Twitter" that points to the Learners Guild profile page on Twitter

[answer: B]

### What is the error in the following code?

```html
<style>
  .header {
    color: blue;
    font-size: 32px;
    font-style: italic;
  }
</style>

<h2 id="header">
  Blog
</h2>
```

A. "Blog" is an invalid HTML element and so will throw an "InvalidElementError" in the browser.
B. The appropriate tag to put CSS in is a `<css>` tag, not a `<style>` tag.
C. The CSS in the `<style>` is targeting elements with a _class_ of "header", but the `<h2>` tag has an _id_ of "header".
D. You can't override the `font-size` of a `<h2>` tag: header tags must use their default sizes.

[answer: C]

### How would the following HTML and CSS render in a web browser?

Assume that there are no other CSS styles applied except the browser defaults and those listed here.

```html
<style>
  .code {
    font-family: monospace;
    padding: 10px;
  }

  p > a {
    color: orange;
  }

  .grey-on-black {
    color: #aaa;
    background-color: #222;
  }
</style>

<a href="/index.html">
  <h2>Home</h2>
</a>

<div class="code grey-on-black">
  Dolore cillum officia dolor laborum esse aute in nisi.
</div>

<p>
  Pariatur est elit consectetur cillum sunt irure <a href="/blog.html">non laboris</a> exercitation mollit nisi exercitation laborum ut quis aute.
</p>
```

[image options: correct.png, incorrect-*.png]
