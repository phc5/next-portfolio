---
title: 'Designing Data Intensive Applications'
date: '2021-02-23'
snippet: 'A running list of notes while I read through Designing Data Intensive Applications by Martin Kleppmann.'
author:
  name: 'Paul Chong'
  picture: '/profilepic.jpg'
tag: 'Reading'
---

## Table of Contents

## Part 1: Foundations of Data Systems

There are three sort of pillars to building out data intensive applications: reliability, scalability, and maintainability. Reliability means that our system is able to continue to work correctly even when faced with adversity (hardware and/or software faults). Scalability refers to the ability to shrink and grow depending on the application's usage. And maintainability highlights the operability, simplicity, and evolvability of our systems so that future developers will be able to work on the system productively.

A data-intensive application is typically built from building blocks that provide some sort of common functionality. Today our applications usually do the following when it comes to data:

- Store data so that our application can use it later (databases)
- Remember the data so that our application can access it blazingly fast (caches)
- Allow users to find specific data within our big dataset (search indexes)
- Send a message so that it can be handled asynchronously (stream processing)
- Periodically process data (batch processing)

When we think about databases, queues, caches, etc... we see them as different categories of tools. Each has their different access patterns and performance characteristics. When you combine several tools to make a service, the service's API usually hides the implementation details from the client. By doing so, you've created a special-purpose data system from smaller components.

### Data Models and Query Languages

Data models are a very important (possible the most important) part of software engineering because they impact how we write software and how we think about the problem at hand. It is critical to choose a data model that is appropriate to the application; they each have their tradeoffs. We'll be looking at document, relational, and graph data models.

#### Relational vs Document Model

Relational model is where data is organized into relations (tables in SQL), where each relation is an unordered collection of tuples (rows in SQL). Relational databases stemmed from the problem of business data processing which includes transaction processing and batch processing.

#### The Birth of NoSQL

NoSQL grew in popularity because of several different factors:

- need for better scalability than relational databases, including very large datasets or very high write throughput
- need for free and OSS software
- specialized queries that aren't supported in relational models
- more open schema compared to relational model.
