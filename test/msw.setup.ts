import { beforeAll, afterAll } from "vitest";
import { setupServer } from "msw/node";
import { rest } from "msw";

const server = setupServer(
  rest.get(
    "https://jsonplaceholder.typicode.com/posts/:id",
    (req, res, ctx) => {
      const id = req.params.id;
      return res(
        ctx.json({
          body: "Mocked! Request id: " + id,
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());
