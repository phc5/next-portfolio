---
title: 'Encoding to Base64 from the Command Line'
date: '2020-08-13'
snippet: 'A short snippet to Base64 encode from the command line.'
author:
  name: 'Paul Chong'
  picture: '/profilepic.jpg'
tag: 'Technology'
---

## What is OpenSSL?

OpenSSL is a toolkit for the Transport Layer Security and Secure Socket Layer protocols as well as a general-purpose cyptography library. It is used to generate private keys, create CSRs, install TSL/SSL certificates, identify certifcate information, and much more.

Learn more about [OpenSSL](https://www.openssl.org/).

## Encode to Base64 using openssl

If you ever find yourself in a situation where you want to encode a file to base64, use this command: `openssl base64 -in <target filename> -out <destination filename>`.

Why did I need to convert a file into base64 encoding? I had to convert a `png` into a `base64` encoding to include it in a markdown file so that people could view it! I didn't want to upload the image to a server and reference it via a URL.
