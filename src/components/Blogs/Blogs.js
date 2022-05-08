import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <div>
      <h1 className="bg-light mt-2 py-2">Frequently Asked Questions</h1>
      <div className="container mt-5">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h3 className="fw-bold">
                Difference between javascript and nodejs?
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <div className="container">
                JavaScript is a scripting language that enables you to create
                dynamically updating content, control multimedia, animate
                images, and pretty much everything else.JavaScript running any
                engine like Spider monkey (FireFox), JavaScript Core (Safari),
                V8 (Google Chrome) or Node.js is an open-source, cross-platform,
                back-end JavaScript runtime environment that runs on the V8
                engine and executes JavaScript code outside a web browser And
                javascript program which will be written under this Node JS will
                be always run in V8 Engine.
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h3 className="fw-bold">
                when should you use node js and when should you use mongodb?
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              Node.js is a server-side JavaScript run-time environment. It's
              open-source, including Google's V8 engine, libuv for
              cross-platform compatibility, and a core library. Notably, Node.js
              does not expose a global "window" object, since it does not run
              within a browser.Node.js is primarily used for non-blocking,
              event-driven servers, due to its single-threaded nature. It's used
              for traditional web sites and back-end API services, but was
              designed with real-time, push-based architectures in mind. or
              MongoDB stores data records as BSON documents. BSON is a binary
              representation of JSON documents, though it contains more data
              types than JSON.Most businesses use MongoDB as a distributed
              database on multiple, geographically dispersed servers in a
              configuration called a cluster. Clusters allow a MongoDB database
              to scale horizontally across many servers with sharding
              (auto-balancing). basicaly mongodb is storing data.MongoDB offers
              an API library that runs within a Nodejs application to give you
              programmatic access to MongoDB so you can create databases and
              then add, query, update or delete data from the MongoDB database.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h3 className="fw-bold">
                Differences between sql and nosql databases.?
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              SQL is a domain-specific language used in programming and designed
              for managing data held in a relational database management system,
              or for stream processing in a relational data stream management
              system or A NoSQL database provides a mechanism for storage and
              retrieval of data that is modeled in means other than the tabular
              relations used in relational databases .SQL Developed in the 1970s
              with a focus on reducing data duplication or NoSQL Developed in
              the late 2000s with a focus on scaling and allowing for rapid
              application change driven by agile and DevOps practices. SQL
              Examples : Oracle, MySQL, Microsoft SQL Server, and PostgreSQL.
              NoSql Examples : Document: MongoDB and CouchDB, Key-value: Redis
              and DynamoDB, Wide-column: Cassandra and HBase, Graph: Neo4j and
              Amazon Neptune.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h3 className="fw-bold">
                What is the purpose of jwt and how does it work?
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued.JWTs differ from other
              web tokens in that they contain a set of claims. Claims are used
              to transmit information between two parties. What these claims are
              depends on the use case at hand. For example, a claim may assert
              who issued the token, how long it is valid for, or what
              permissions the client has been granted.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Blogs;
