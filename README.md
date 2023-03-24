# Introduction

This is a minimal [bzBond-server Microbond](https://github.com/beezwax/bzBond/tree/main/packages/bzBond-server#microbonds) example. Use it to learn about and get started creating Microbonds.

# Installation

## Installation on macOS/Linux

On macOs/Linux use the following command to install this Microbond:

`/var/www/bzbond-server/bin/install-microbond.sh bzmb-hello-world https://github.com/beezwax/bzbond-server-microbond-example`

## Installation on Windows Server

On Windows Server use the following command to install this Microbond:

`powershell -File "C:\Program Files\bzBond-server\bin\install-microbond.ps1" bzmb-hello-world https://github.com/beezwax/bzbond-server-microbond-example`

# Microbond architecture

## Basic Microbond architecture

A microbond must define two things:

1. An asynchronous function that will receive a fastify instance and fastify plugins options
1. Optional: A [fastify plugin options object](https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options).

The function is in charge of defining all the custom routes the Microbond should handle. Below is a bare bones example:

```javascript
async function bzmbHelloWorld(fastify) {
  fastify.get("/bzmb-hello-world", (req, res) => {
    return "Hello, world!";
  });
}

module.exports = { microbond: bzmbHelloWorld };
```

Note that this example skipped the `options` property as it's optional. The body of the function defines a GET route at `/bzmb-hello-world`, that simply returns the string `"Hello, world!"`.

## Microbond architecture: Adding schema

To define schema and ensure only requests with a valid body are executed, define a schema in [JSON schema](https://json-schema.org/) format and include it in your route function.

```javascript
const mySchema = {
  body: {
    type: "object",
    required: ["foo"],
    properties: {
      foo: { type: "string", minLength: 1 },
      bar: { type: "array" },
    },
  },
};

async function bzmbHelloWorld(fastify) {
  fastify.post("/bzmb-hello-world", { schema: mySchema }, (req, res) => {
    const { foo, bar } = req.body;
    // ... do something with foo and bar
    return "Hello, world!";
  });
}

module.exports = { microbond: bzmbHelloWorld };
```
Note that we are defining a schema for a request body so we change our fastify route to `POST` as `GET` requests don't have bodies. 

## Microbonds are fastify plugins

bzBond-server runs on [fastify](https://www.fastify.io/), and Microbonds are fastify plugins. Full documentation on creating fastify plugins can be found [here](https://www.fastify.io/docs/latest/Guides/Getting-Started/#your-first-plugin).