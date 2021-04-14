import { Application, Router } from "https://deno.land/x/oak/mod.ts";

import * as indexRouter from "./routers/indexRouter.ts";
import * as userRouter from "./routers/usersRouter.ts";

const PORT = 3000;
const HOSTNAME = "0.0.0.0";

const app = new Application();
const router = new Router();

// router.get('/', (ctx) => {
// 	ctx.response.body = "index page";
// });


// router.get("/users", (ctx) => {
// 	ctx.response.body = "users";
// });

// router.get("/users/:name", (ctx) => {
// 	ctx.response.body = ctx.params.get("name");
// });

// app.use((ctx, next) => {
// 	console.log("Middlware here!");
// 	next();
// });

// app.use((ctx) => {
// 	ctx.response.body = "Hello World from Oak!";
// }));

indexRouter.use("/", router);
userRouter.use("/users", router);

app.use(router.routes());
app.use(router.allowedMethods());

console.log("listening");
app.listen({ port: PORT, hostname: HOSTNAME })