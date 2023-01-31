# bzBond Server Example Plugin

This is a minimal bzBond server plugin example. You can browse the code at
`index.js` to see how it works. Install it with:

    $ ./var/www/bzbond-server/bin/install-plugin.sh beezwax/bzbond-server-plugin-example

# bzBond Plugin Architecture

A bzBond server plugin must define two things:

1. An asynchronous function that will receive a fastify instance, as well the
   plugins options
1. An [fastify plugin options
   object](https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options).

The function is in charge of defining all the custom routes you want your
bzBond server to handle. Below is a bare bones example:

```javascript
async function myPlugin(fastify) {
  fastify.get("/hello-world", (req, res) => {
    return "Hello, world!";
  });
}

module.exports = { plugin: myPlugin };
```

Note that we skipped the `options` as it's optional. We then define a GET
route at `/hello-world`, and simply return the string `"Hello, world!"`.

For the full documentation on how to use fastify, see [the official
documentation](https://www.fastify.io/docs/latest/Guides/Getting-Started/#your-first-plugin).
