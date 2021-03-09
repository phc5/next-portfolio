---
title: "Fixing the Absence of Styles in my SSR'd HTML"
date: '2021-03-04'
snippet: "I recently switched to tailwindcss from styled-components. During this process, I noticed my server-side rendered HTML wasn't styled. I dug deep and found a solution from a blog post by the creator of tailwindcss, Adam Wathan."
author:
  name: 'Paul Chong'
  picture: '/profilepic.jpg'
tag: 'Snippets'
---

## Table of Contents

## Problem

I recently removed `styled-components` and switched to `tailwindcss` on my personal website. During this process, I noticed my server-side rendered HTML did not include styling, which is a big reason why I used Next.js (for its SSR capabilities):

![Styles missing in SSR'd HTML](/blog/beforeUpdatingDocument.png 'Styles missing in SSRd HTML')

As you can see, my HTML was missing styles.

## Investigation

To get server-side rendered styles with `styled-components`, all you had to do was update the `_document.js` file under your `pages` directory like this:

```
// in _document.ts
...
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
```

<sub>\*Read more about SSR with `styled-components` [here](https://styled-components.com/docs/advanced#server-side-rendering).</sub>
<sub>\*\*The above code snippet can be found in the [Next.js with styed-components example](https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js).</sub>

I did some digging around and found this [blog post](https://blog.tailwindcss.com/building-the-tailwind-blog) by Adam Wathan, the creator of tailwindcss. Now this blog post didn't have anything regarding my issue but it was an insightful read and had a link to the tailwindcss blog's [respository](https://github.com/tailwindlabs/blog.tailwindcss.com).

I went through the files and came across `_document.js` which had the following:

```
// in _document.js
...
class InlineStylesHead extends Head {
  getCssLinks() {
    return this.__getInlineStyles()
  }

  __getInlineStyles() {
    const { assetPrefix, files } = this.context._documentProps
    if (!files || files.length === 0) return null

    return files
      .filter((file) => /\.css$/.test(file))
      .map((file) => (
        <style
          key={file}
          nonce={this.props.nonce}
          data-href={`${assetPrefix}/_next/${file}`}
          dangerouslySetInnerHTML={{
            __html: fs.readFileSync(path.join(process.cwd(), '.next', file), 'utf-8'),
          }}
        />
      ))
  }
}

export default class Document extends NextDocument {
  ...
  render() {
    return (
      <Html lang="en">
        <InlineStylesHead>
          ...
        </InlineStylesHead>
        ...
      </Html>
    )
  }
}
```

What is this doing? The `getInlineStyles()` gets all `.css` files, converts them into an inline style tag, and returns them. Then in `<Document />` we render the `<InlineStylesHead />` component which will inline the style tags we generated in the `<head>` of our HTML document.

## Solution

Great, I can now just copy and paste this into my `_document.js`. Nope... It turns out the tailwindcss blog was using an [older version of Next.js](https://github.com/tailwindlabs/blog.tailwindcss.com/blob/master/package.json#L18), v9.4.4, while I was on v10. The newer version didn't support `this.context._documentProps` in `_getInlineStyles()` so I had to figure out a workaround for the `<InlineStylesHead />` component:

```
// in _document.ts
class InlineStylesHead extends Head {
  getCssLinks: Head['getCssLinks'] = ({ allFiles }) => {
    const { assetPrefix } = this.context;
    if (!allFiles || allFiles.length === 0) return null;

    return allFiles
      .filter((file: any) => /\.css$/.test(file))
      .map((file: any) => (
        <style
          key={file}
          nonce={this.props.nonce}
          data-href={`${assetPrefix}/_next/${file}`}
          dangerouslySetInnerHTML={{
            __html: fs.readFileSync(
              path.join(process.cwd(), '.next', file),
              'utf-8'
            ),
          }}
        />
      ));
  };
}
```

The differences as of Next.js v10:

- The `getCssLinks()` function gets `allFiles` passed into it as a prop.
- `this.context` no longer supports `_documentProps`.

With these changes in place, I was able to get my styles on my SSR'd HTML!

![Styles present in SSR'd HTML](/blog/afterUpdatingDocument.png 'Styles present in SSRd HTML')
