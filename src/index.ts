import { Elysia } from "elysia";
import api from "./api";

const app = new Elysia()

app.use(api)

const port = process.env.PORT || 5000

app.listen(port);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
