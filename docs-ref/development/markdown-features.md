---
sidebar_position: 2
---

# Markdown Features

Docusaurus supports **[Markdown](https://daringfireball.net/projects/markdown/syntax)** and a few **additional features**.

## Front Matter

Markdown documents have metadata at the top called [Front Matter](https://jekyllrb.com/docs/front-matter/):

```text title="my-doc.md"
// highlight-start
---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url
---
// highlight-end

## Markdown heading

Markdown text with [links](./hello.md)
```

## Links

Regular Markdown links are supported, using url paths or relative file paths.

```md
Let's see how to [Create a page](/markdown-features).
```

```md
Let's see how to [Create a page](./markdown-features.md).
```

**Result:** Let's see how to [Create a page](./markdown-features.md).

## Images

Regular Markdown images are supported.

Add an image at `static/img/logo.svg` and display it in Markdown:

```md
![Docusaurus logo](/img/logo.svg)
```

![Docusaurus logo](/img/logo.svg)

## Code Blocks

Markdown code blocks are supported with Syntax highlighting.

    ```jsx title="src/components/HelloDocusaurus.js"
    function HelloDocusaurus() {
        return (
            <h1>Hello, Docusaurus!</h1>
        )
    }
    ```

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

## Admonitions

Docusaurus has a special syntax to create admonitions and callouts:

    :::note

    The content and title *can* include markdown.

    :::

    :::tip You can specify an optional title

    Heads up! Here's a pro-tip.

    :::

    :::info

    Useful information.

    :::

    :::caution

    Warning! You better pay attention!

    :::

    :::danger

    Danger danger, mayday!

    :::


:::note

The content and title *can* include markdown.

:::

:::tip You can specify an optional title

Heads up! Here's a pro-tip.

:::

:::info

Useful information.

:::

:::caution

Warning! You better pay attention!

:::

:::danger

Danger danger, mayday!

:::

## MDX and React Components

[MDX](https://mdxjs.com/) can make your documentation more **interactive** and allows using any **React components inside Markdown**:

```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
```

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`);
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
