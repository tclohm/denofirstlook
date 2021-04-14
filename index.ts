import { serve } from "https://deno.land/std/http/server.ts";

const PORT = 3000;
const HOSTNAME = "0.0.0.0";

const server = serve({ port: PORT, hostname: HOSTNAME });

console.log(`Server now running on http://${HOSTNAME}:${PORT}`)
;
// MARK: -- start the server, infinite loop
for await (const req of server) {
	const params = new URLSearchParams(req.url.substr(1));
	const name = params.get("name");
	req.respond({ body: `<h1>Hello ${name || "World"}!</h1>` });
}

export { };

// deno run -A (drop the permission and allow everything!) --watch --unstable index.ts