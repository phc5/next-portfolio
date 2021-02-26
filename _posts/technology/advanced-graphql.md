---
title: 'Advanced GraphQL'
date: '2020-04-20'
snippet: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.'
author:
  name: 'Paul Chong'
  picture: '/profilepic.jpg'
tag: 'Technology'
---

Notes from Advanced GraphQL

## What is GraphQL?

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools. (definition from [graphql.org](https://graphql.org/))

That definition can be a mouthful for people who have never used or heard of GraphQL. In simpler terms, GraphQL is a [specification](https://spec.graphql.org/). The GraphQL spec describes a declarative query language that your clients can use to ask an API for the exact data you want. There are four main parts to how GraphQL works:

- Type Definitions: defines a set of types which completely describe the set of possible data you can query on that service.
- Resolvers: how your API can resolve the data your asking for.
- Schema: your typedefs + resolvers
- Data Sources: the data you are going to query for: databases, 3rd-party APIs, etc...
- Query/Mutation/Subscription: client queries for data and these queries are validated against your schema.

## Authentication and Authorization

Authentication: used to identify a user.
Authorization: used to determine which operations a user (usually privileged) can do on certain resources.

There are so many ways to auth (but go with the 2nd one - using context):

- Outside of GraphQL
  - Using Apollo Server as middleware attached to an existing Express server or Express middleware to an Apollo Server
  - Cons:
    - This will lockdown all GraphQL queries and mutations
    - Extra complexity of passing auth info into GraphQL from outside like Express.
- When creating the context object
  - When you create your Apollo Server, you can pass a context object that is available to every resolver as the third parameter. Remember resolvers take in `(parent, variables, context)`.
  - This context object gets created every single request so during this, you can do some time of auth.
  - Pros:
    - Can access the incoming request to determine authentication since you have access to request headers.
    - No extra work to use in resolvers since ctx object is passed by default to resolvers.
    - You have option to lockdown entire GraphQL
- Inside the resolvers
  - Each resolver is encapulsated and only know about their execution context; they are responsible for resolving a value for a field.
  - Cons:
    - Separation of Concerns(business logic vs auth logic): Resolvers shouldn't really be doing auth because their sole job is resolve data. It should assume if it's called that it was called by an authenticated/authorized user.
    - Simplest to implement but hardest to reuse and scale.
- Directives

## Real-time Data with GraphQL

There are two different approaches that GraphQL supports when it comes to real-time data: subscriptions and live queries.

Subscriptions are a GraphQL operation that notifies clients of events.

- Part of the GraphQL spec; great support.
- Don't really look at when the data changes but when an event is fired.

Live Queries are a client side implementation that gets notified when data changes.

- Experimental; not part of GraphQL spec as of today so little support.
- Cares about when the data changes.

They both are flexible and support a wide range of transports and protocols. But for now just use subscriptions until live queries become part of the spec and have community support. If manual refetching and polling have too high of a lateny cost, you should look into using subscriptions.

In order to use Subscriptions, you need to

1. Add Subscription to your Schema just like your Queries and Mutations.
2. Set up PubSub (protocol where you can subscribe to and publish to a channel) on your server.
3. Create Subscription event resolvers.
4. Add any needed authentication and context.
5. Client side setup like websockets or polling.

## Errors & Error Handling

Apollo Server provides a collection of predefined errors, such as AuthenticationError, ForbiddenError, UserInputError, and a generic ApolloError. These errors allow you to have a specific error thrown before and during GraphQL execution which makes it eaier for you to debug errors that may happen. Unlike HTTP status codes, errors in Apollo Server are human-readable strings.

## Testing

Testing Resolvers

- unit test resolver functions
- mock out data sources - beauty of passing things in context is you can mock it out

Testing Schema

- convert type defs into schema
  - convert gql tag into AST and compare
- unit test object types

Testing Server

- integration test the entire server
- create test client to use issue queries and mutations with against a testing instance of your server
- mock variables, context, data sources

## Directives

Allow you to add logic and metadata to your Schemas, Queries, or Mutations. They act like middleware for your Schemas or post processing hooks for your Queries and Mutations and gives you fine-grain control down to the field level on your type defs and eliminte post processing on your clients after your query.

A directive follows the form `@${directive}`. An example directive is `@deprecated(reason: "Use newfield ___")`. When attached to a field, this directive will tell the consumer that the field is deprecated and to use a new field. Apollo exposes three default directives: `@deprecated`, `@skip`, and `@include`.

You can also create your own directives in Apollo: [Creating Directives](https://www.apollographql.com/docs/apollo-server/schema/creating-directives/).

## Caching

If you're able to use HTTP caching, cache external HTTP data-sources, and cache client-side.

- Application Caching
  - Prefered way to cache right now but it might be network caching in the future
  - Many options and levels to cache depening on your server.
  - Examples:
    - DB
    - External data source
    - Resolvers
- Network Caching
  - HTTP caching
- Client-side caching
