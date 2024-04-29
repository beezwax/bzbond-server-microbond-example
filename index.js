module.exports = {
  async microbond(fastify, options) {
    fastify.get("/bzmb-hello-world", (req, res) => {
      return "Hello, world!";
    });
  },
  options: {},
};

async function helloWorld(fastify, options) {
  fastify.get(
    "/bzmb-hello-world",
    async (req, res) => {
      try {
        const greeting = await helloWorld();
        res
          .code(200)
          .send(greeting);
      } catch (error) {
        res
          .code(500)
          .send(error);
      }
    }
  )
}

module.exports = { microbond: helloWorld };