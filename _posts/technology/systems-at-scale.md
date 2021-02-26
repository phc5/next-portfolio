---
title: 'Systems at Scale'
date: '2020-04-12'
snippet: 'How can I scale a system from 1 user to millions of users? Throw more servers at it? Today, I explore ways to scale a system from small to large scale.'
author:
  name: 'Paul Chong'
  picture: '/profilepic.jpg'
tag: 'Technology'
hidden: 'true'
---

As a UI Engineer in the game for 3+ years now, I have had my fair share of dealing with the scalability and performance of my applications. Many of the scaling and performance tasks of my systems are automated and built using intrastructure-as-code tooling like Terraform or Cloudformation which leave the scaling to a cloud provider like AWS to handle the provisioning of more servers for me. But there's much more to building systems at scale than horizontally scaling your servers. The below is what I've gathered from reading various things on the Internet on how to build and design your systems at scale: starting from 1 user to millions of users.

## 1 User

When first starting out, you will most likely have one client that requests data from the server and displays that data in a meaningful way, one server that houses your APIs that your client can interface with and communicates with your database, and one database that you can store data to and read data from.

Take for example your local development workflow: you have a DB, a server, and your client running all locally and you can push and deploy this setup to the cloud such as AWS EC2 and it would work fine for one user.

## 1 < N <= 10 Users

At this point, you have more than one user on your application. It makes sense to first split out your database from the rest of the stack. So now instead of a single host that contains the three components (server, client, and database), you have a host for the database and a host for your web client and API server (or maybe you can even split this part out too!).

By separating out your database from your client and API, you have the ability to scale them out separately. Maybe you are storing terabytes of data and need a bigger instance for your database. Now you can do so without wasting resources.
