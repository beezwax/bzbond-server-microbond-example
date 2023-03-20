module.exports = {
  async microbond(fastify, options) {
    fastify.get("/hello-world", (req, res) => {
      return "Hello, world!";
    });
  },
  options: {},
};
