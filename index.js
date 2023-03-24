module.exports = {
  async microbond(fastify, options) {
    fastify.get("/bzmb-hello-world", (req, res) => {
      return "Hello, world!";
    });
  },
  options: {},
};
