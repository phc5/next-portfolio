---
title: 'System Design'
date: '2021-01-19'
snippet: ''
author:
  name: 'Paul Chong'
  picture: '/profilepic.jpg'
tag: 'Technology'
hidden: 'true'
---

## SQL Databases

A relational database like SQL is a collection of data items organized in tables.

ACID is a set of properties of relational database transactions:

- Atomcity: each transaction is all or nothing
- Consistency: any transaction will bring the database from one valid state to another
- Isolation: executing transactions concurrently has the same results as if the transactions were executed
- Durability: once a transaction is comitted, it will remain so.

There are many ways to scale a relational database: master-slave, master-master, federation, sharding, denormalization, and SQL tuning.

- Master-slave: the master db serves read/writes while the slave dbs serve reads. Slaves can also replicate to additional slaves in a tree-like fashion. If master goes down, system can continue in read-only mode until a slave is promoted to master or a new master is created.
  - disadvantages: additonal logic needed to promote slave -> master
- Master-master: both masters serve read but coordinate together on writes. If one master goes down, then the other master handles load.
  - disadvantages: need a load balancer or make changes to your application code to determine where to write, either loosely consistent (which violates ACID) or has increased latency due to synchronization of writes.
- Federation: splitting up databases by function; having separate databases for each function.
- Sharding: distrubting data across different database such that each database can only manage a subset of data. This results in less read/write traffic, less replication, and more cache hits. If one shard goes down, the other shards are still operational; although you will want to have replication on each shard to avoid data loss.
  - disadvantages: need to update application logic to work with shards, data distribution can be lopsided, joining data from multiple shards is complex, sharding adds more hardware and additional complexity.

## NoSQL Databases

A collection of data items represented in a key-value store, document store, wide column store, or a graph database. Most NoSQL databases lack true ACID transactions and favor eventual consistency.

Often follow the BASE properties which are:

- Basically available: they systems guarantees availability.
- Soft state: the state of the system may change over time, even without input.
- Eventual consistency: the system will become consistent over a period of time, given that the system doesn't reveive input during that period.

There are many flavors of NoSQL databases: key-value stores, document stores, wide column stores, and graph database.

- Key-value store: generally allow for O(1) reads and writes and is often backed by memory or SSD. Provides high performance and are often used for simple data models or rapidly-changing data, such as an in-memory cache layer. Often the basis for a more complex system such as a document store or graph database.
- Document store: centered around documents where a document stores all information for a given object. Provides APIs or query language to query based on the internal structure of the document itself. Documents may have different fields.

## SQL vs NoSQL

Reasons for SQL: structured data, strict schema, relational data, need for complex joins, transactions, clear patterns for scaling, lookups by index are very fast.
Reasons for NoSQL: semi-structured data, dynamic or flexible schema, non-relational data, no need for complex joins, store many TB of data, very data intensive workload, very high throughput for IOPS.

Sample data well-suited for NoSQL: rapid ingestion of clickstream and log data, leaderboard or scoring data, temporary data (shopping cart), frequently accessed tables, metadata/lookup tables.

## Caching

Caching improves page load times and can reduce the load on your servers and databases.

Types of caching

- Client caching: caches can be located on the client side, server side, or in a distinct cache layer
- CDN: content delivery network are considered a type of cache; think cloudfront
- Web server caching: reverse proxies and caches can serve static and dynamic content directly. Web servers can also cache requests, returning responses without having to hit the application servers.
- Database caching: DBs usually have some level of caching in default config optimized for generic use cases, but you can also tweak settings for specific usage patterns can further boost performance.
- Application caching: in-memory caches such as memcached and redis are key-value stores between your app and your data storage. Since the data is held in RAM, it is much faster than typical databases where data is stored on disk. RAM is more limited than disk so cache invalidation algorithms such as LRU are used to help invalidate cold entries and keep hot data in memory.
  - There are many levels you can cache:
    - Database query level: whenever you query the database, hash the query as a key and store the result to the cache. This method suffers from expiration issues because its hard to delete a cached result with complex queries and if one piece of data changes, you need to delete all cached queries that might include that one changed cell.
    - Object level: see your data as an object and have your application assemble the dataset from the database into a class instance or a data strcuture(s). Good for user sessions, fully rendered web pages, activity streams, user graph data.

Disadvantages:

- Need to maintain consistency between caches and the source of truth via cache invalidation which is a hard problem
- Need to know when to update the cache

  ### When to update the cache

  - Cache-aside: the application is responsible for reading and writing from storage. The cache does not interact with storage directly. Your app looks for entry in cache, resulting in a cache miss, then loads entry from database, adds entry to cache, returns entry. Subsequent reads are fast and only requested data is cached, which avoids filling up the cache with data that isn't requested.

    - Disadvantages: each cache miss results in three trips which can cause a noticeable delay, data can become stale if the db is updated (solve this issue with TTL or using a write-through cache), and when a node fails, you will have to replace it with a new, empty node increasing latency.

  - Write-through: the application uses the cache as the main data store by reading and writing to it, while the cache is responsible for reading and writing to the database. Data in the cache will not be stale since you are writing to it first and then writing it to the db.

    - Disadvantages: it is slow overall due to the write operation, but subsequent reads of just written data are fast; when a new node is created due to failure or scaling, the new node will not cache entries until the entry is updated in the database (cache-aside in conjuction with write-through can mitigate this), most data written might never be read so use TTL to get rid of it.

  - Write-behind (write-back): add/update entry in cache, asynchronously write entry to data store, improving write performance.

    - Disadvantages: there could be data loss if cache goes down prior to writing to db, it is more complex to implement write-back cache than it is to implement cache-aside or write-through.

  - Refresh-ahead: you can configure the cache to automatically refresh any recently accessed cache entry prior to its expiration. This can result in reduced latency vs read-through if the cach can accurately predict which items are likely needed in the future.
    - Disadvantages: not accurately predicting which items are going to be needed can result in reduced performance than without refresh-ahead.

## Asynchronism

Asynchronous workflows help reduce request times for expensive operations that would otherwise be performed synchronously. They can also help by doing work in advance.

Message queues can receive hold, and deliver messages. If an operation is too slow to perform inline, you can use a message queue with the following workflow: an application publishes a job to the queue then notifies the user of job status, then the worker picks up the job from the queue, processes it, and then signal the job is complete. By using queues, the user is not blocked and the job is processed in the background.

Task queues receive tasks and their related data, runs them, and then delivers their results. They can support scheduling and can be used to run computationally-intensive jobs in the background.

Back pressure is where you limit the queue size to prevent queues growing larger than memory; if it does grow larger than memory you can potentially get cache misses and slower performance. Back pressure allows you to maintain a high throughput rate and good response times for jobs already in the queue. Once the queue fills up, the server responds with 503 to try again later.

## Communication

HTTP is a method for encoding and transporting data between a client and a server. It is a request/response protocol: clients issue requests and servers issue response with relevant content and completion status info about the request. HTTP is self-contained, allowing requests and responses to flow through many intermediate routers and servers that perform load balancing, caching, encryption, and compression.

- An HTTP request consists of a method and endpoint: (\*idempotent means that you can call it many times with the same outcome)
  - GET: reads a resource; idepmotent; safe; cacheable
  - POST: creates a resource or triggers a process that handles data; not idepmotent; not safe; cacheable if repsonse contains freshness info
  - PUT: Creates or replaces a resource; idempotent; not safe; not cacheable
  - PATCH: Partially update a resource; not idempotent; not safe; cacheable if response contains freshness info
  - DELETE: Deletes a resource; idempotent; not safe; not cacheable.

TCP is a connection-oriented protocol over an IP network. Connection is established and terminated using handshake. All packets sent are guaranteed to reach the destination in the original order and without corruption through: sequence numbers and checksum fields for each packet and acknowledgement packets and automatic retransmission. If the sender doesn't receive a correct response, it will resend the packets. If there are multiple timeouts, the connection is dropped. To ensure high throughput, web servers can keep a large number of TCP connections open, resulting in high memory usage. TCP is useful for applications that need high reliability but are less time critical such as web servers, database info, SMTP, FTP, and SSH. Use TCP over UDP when you need all the data to arrive intact.

UDP (user datagram protocol) is connectionless. Datagrams are guaranteed only at the datagram level. Datagrams might reach their destination out of order or not at all. Without the guarantees that TCP supports, UDP is generally more efficient. UDP can brodcast which sends datagrams to all devices on the subnet. UDP is less reliable but works well in real time use cases such as VoIP, video chat, streaming, and realtime multiplayer games. Use UDP over TCP when you need the lowest latency, late data is worse than loss of data, you want to implement your own error correction.

In RPC (remote procedure call), a client causes a procedure to execute on a different address space, usually a remote server. The procedure is coded as if it were a local procedure call, abstracting away the details of how to communicate with the server from the client program. Remote calls are usually slower and less reliable than local calls so it is helpful to distinguish RPC calls from local calls.

- RPC is a request-response protocol:
  - Client program: Calls the client stub procedure.
  - Client stub procedure: Marshals (packs) procedure id and arguments into a request message.
  - Client communication module: OS sends the message from the client to the server.
  - Server communication module: OS passes the incoming packets to the server stub procedure.
  - Server stub procedure: unmarshalls the results, calls the server procedure matching the procedure id and passes the given arguments.
  - The server response repeats the above steps in reverse order.
- Disadvantages: RPC clients become too tightly couples to the service implementation, a new API must be defined for every new operation or use case, it can be difficult to debug RPC, you might not be able to leverage existing technologies out of the box.

REST is an architectural style enforcing a client/server model where the client acts on a set of resources managed by the server. The server provides a representation of resources and actions that can manipulate or get a new representation of resources. All communication must be stateless and cacheable. Four qualities of a RESTful service:

- Identify resources (URI in HTTP): use the same URI regardless of any operation.
- Change with representations (Verbs in HTTP): use verbs, headers, and body.
- Self-descriptive error message (status response in HTTP): use status codes, don't reinvent the wheel.
- HATEOAS (HTML interface for HTTP): your web service should be fully accessible in a browser.
  REST is focused on exposing data. It minimizes the coupling between client/server and is often used for public HTTP APIs. REST uses a more generic and uniform method of exposing resources through URIs, representation through headers, and actions through verbs such as GET, POST, PUT, DELETE, and PATCH. Being stateless, REST is great for horizontal scaling and partitioning.

Disadvantges of REST:

- REST if focused on exposing data, so it might not be a good fit if resources are not naturally organized or accessed in a simple hierarchy.
- REST relies on a few verbs (GET, POST, PATCH, DELETE, PUT) which sometimes doesn't fit your use case.
- Fetching complicated resources with nested hierarchies requires multiple round trips between the client and server to render single views. So especially in mobile applications, this is not ideal.
- Over time, more fields might be added to an API response and older clients will receive all the new data fields even though they may night use them which bloats the payload.

RPC and REST comparison

### RPC and REST calls comparison

| Operation                       | RPC                                                                                       | REST                                                         |
| ------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Signup                          | **POST** /signup                                                                          | **POST** /persons                                            |
| Resign                          | **POST** /resign<br/>{<br/>"personid": "1234"<br/>}                                       | **DELETE** /persons/1234                                     |
| Read a person                   | **GET** /readPerson?personid=1234                                                         | **GET** /persons/1234                                        |
| Read a person’s items list      | **GET** /readUsersItemsList?personid=1234                                                 | **GET** /persons/1234/items                                  |
| Add an item to a person’s items | **POST** /addItemToUsersItemsList<br/>{<br/>"personid": "1234";<br/>"itemid": "456"<br/>} | **POST** /persons/1234/items<br/>{<br/>"itemid": "456"<br/>} |
| Update an item                  | **POST** /modifyItem<br/>{<br/>"itemid": "456";<br/>"key": "value"<br/>}                  | **PUT** /items/456<br/>{<br/>"key": "value"<br/>}            |
| Delete an item                  | **POST** /removeItem<br/>{<br/>"itemid": "456"<br/>}                                      | **DELETE** /items/456                                        |
