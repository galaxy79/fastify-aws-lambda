export default async function (fastify, opts) {
  fastify.route({
    method: "GET",
    url: "/order",
    handler: async (req, res) => {
      return {
        orderId: "123",
        products: [
          {
            productId: "1",
            productName: "T shirt",
            quantity: 2,
            rate: 100,
          },
        ],
      };
    },
  });
  fastify.route({
    method: "POST",
    url: "/order",
    schema: {
      body: {
        type: "object",
        // array of required fiels
        required: ["name", "products", "address"],
        properties: {
          name: { type: "string" },
          products: { type: "array" },
          address: { type: "object" },
        },
      },
      response: {
        201: {
          type: "object",
          properties: {
            orderId: { type: "string" },
          },
        },
      },
    },
    handler: async (req, res) => {
      const timestamp = Date.now();
      const randomPortion = Math.floor(Math.random() * 10000); // You can adjust the range as needed
      const uniqueIdentifier = `${timestamp}-${randomPortion}`;
      res.status(201);
      return { orderId: uniqueIdentifier };
    },
  });
}
