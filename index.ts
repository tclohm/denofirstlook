import { serve } from "https://deno.land/std/http/server.ts";
import routeParser from "https://dev.jspm.io/route-parser@0.0.5";
import RouteParser from "https://unpkg.com/@types/route-parser@0.1.3/index.d.ts";

const Route = routeParser as typeof RouteParser;

const PORT = 3000;
const HOSTNAME = "0.0.0.0";

const server = serve({ port: PORT, hostname: HOSTNAME });

console.log(`Server now running on http://${HOSTNAME}:${PORT}`);

const route = new Route("/:name");


// MARK: -- start the server, infinite loop
for await (const req of server) {
	const match: any = route.match(req.url);
	// const params = new URLSearchParams(req.url.substr(1));
	// const name = params.get("name");
	req.respond({ body: `<h1>Hello ${match.name || "World"}!</h1>` });
}

export { };

// deno run -A (drop the permission and allow everything!) --watch --unstable index.ts