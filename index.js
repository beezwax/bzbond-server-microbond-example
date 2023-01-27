module.exports = {
  async plugin(fastify, options) {
    fastify.get("/hello-world", (req, res) => {
      return "Hello, world!";
    });
  },
  options: {},
};
