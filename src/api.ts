import { Elysia } from "elysia";

import postController from "./controller";

const api = new Elysia();

api.get("/posts", () => postController.getPosts);

api.get("/", (e) => {
    console.log({e});
    return postController.getPosts);
});

export default api;
