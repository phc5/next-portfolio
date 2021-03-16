---
title: 'CSS for JS'
date: '2021-03-12'
snippet: "I am reading through Josh Comeau's CSS for JS course and will be taking note of things I learn as well as things I found interesting. Let's level up our CSS game!"
author:
  name: 'Paul Chong'
  picture: '/profilepic.jpg'
tag: 'Reading'
hidden: 'true'
---

I am reading through Josh Comeau's CSS for JS course and will be taking note of things I learn as well as things I found interesting. Let's level up our CSS game!

## Color (HSL)

For most of my career, I have been using hex codes and RGBA for color. Josh suggests that HSL (hue, saturation, lightness) is a more intuitive way to work with colors! HSL can be used like hex or RGBA like this:

```
.primary-heading {
  color: #c9eaf5;
}
```

versus

```
.primary-heading {
  color: hsl(195, 69%, 87%);
}
```

### What does HSL stand for?

The H stands for hue. The value for hue is in degress from 0 to 360 degrees. You can think of this value as the pigment of your color.

The S stands for saturation. The value for saturation is a percentage from 0 to 100 percent.

The L stands for lightness or brightness. The value for lightness is ian percentage from 0 to 100 percent.

You can also use HSLA to change the alpha channel also known as transparency which has a value from 0 to 1.

## The Box Model

The box model is made up of four properties: content, padding, border, and margin.

Josh uses an analogy of a person walking outside in the winter. But I will try to come up with my own: an iPhone with a case.

- The content is the iPhone itself, where the phone is inside a case
- The padding is the case's cushion (the space between the outside of the case and the phone)
- The border is the outside material of the case
- The margin is the space between the phone case itself and any surface

### Box Sizing

By default, `box-sizing` is set to `content-box`. The width and height properties include the content but does not include padding, border, or margin. For example, if you had an element with 100px width and 2px borders, the element's content box wil be 100 pixels wide but the element's rendered width will add the border, making the element wider than 100px.

`border-box` tells the browser to account for border and padding in the values set for width and height.

### Border vs Outline

The difference between these two is that outline does not affect layout. Outline is a visual effect over an element and is stacked outside of border.

## Flow Layout

Every HTML has an intrinsic `display` value: inline, block, or inline-block.

- Inline elements can have extra space. Browsers treat inline elements as if they are typography so the browswe adds extra space. To fix this issue we can either set the elemnt to `display: block` or setting `line-height` to 0.

- Block elements content box fill up the width of its parent container; if you want it to just take up the content width, use `width: fit-content;`.

- Inline-block elements allow you to have a block element in an inline context. Inline blocks also do not line-wrap.

### Width Algos

For block elements, one might assume that it takes `width: 100%`, but this is not the case; it actually defaults to `width: auto`. When we use a percetnage to set the width, the value of the percentage is based on the parent's content width so its possible that the child with `width: 100%` can overflow the parent container because of margin.

When it comes to the width algorithms, there are a few values we can use to let the browser do the work for us:

- `min-content`: will make our content become as small as it can be based on the child contents. This is considered an intrinsic value because it is focused on the element itself and not the parent. An extrinsic value is if the value of the width is determined by the parent.
- `max-content`: opposite of `min-width`, this property will set the width to the smallest value that will contain the content without breaks.
- `fit-content`: something we saw earlier, this property will set width based on the size of the children however it is different because if the content is bigger than the parent container, it will break up the content to ensure it doesn't overflow the parent container.

### Rules of Margin Collapse

1. Only block-direction margins collapse

- If you have two `<p>` with 12px of `margin-top` and `margin-bottom`, the space between the two paragraphs will be 12px not 24px.
- Horizontal margins do not collapse

2. Only adjacent elements collapse

3. Larger margin takes effect

## Positioning

There are a few properties that we can use for the css property `position`: static, relative, absolute, fixed, sticky, and more.

### Relative

Making an element `relative` does two things: constrains certain children and enables additional CSS properties. For example, you can use top, bottom, left, and/or right when you make an element's `position` value anything other than `static`. The difference between moving an element with these positional values versus margin is that positional values don't affect layout; the browser will act like the element is still in its original position.

### Absolute

When we set an element to `position: absolute`, we pull the element out of the flow of the document.

### Fixed

Fixed positioning is similar to absolute positioning but it can only be contained by the viewport. There is an exception to this: if any ancestor uses `transform`, then the child element will act like it is absolute and not fixed.

### Sticky

Element's with sticky positioning will stick to an edge. You must set an edge for the element to stock to by setting something like `top: 0`.

Sticky elements will only stick to their parent container.

Sticky elements will take up space unlike absolute and fixed elements.

### Overflow

`auto` vs `scroll`: when you use `auto`, a layout shift occurs when the content exceeds the available space, i.e. the content box will shrink by the scrollbar's width.

`hidden` will truncate the elements inside by the bounds of the container.
