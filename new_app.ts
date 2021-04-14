import { serve } from "https://deno.land/std/http/server.ts";
import { serveFile } from "https://deno.land/std/http/file_server.ts";

const PORT = 3000;
const HOSTNAME = "0.0.0.0";

const server = serve({ port: PORT, hostname: HOSTNAME });

console.log(`Server now running on http://${HOSTNAME}:${PORT}`);


// MARK: -- start the server, infinite loop
for await (const req of server) {
	//const html = await Deno.readFile("index.html");
	const html = await serveFile(req, "index.html");
	console.log(html)
	//req.respond({ body: html });
	req.respond(html)
}

export { };

// deno run -A (drop the permission and allow everything!) --watch --unstable index.ts

// deno run -A "https://deno.land/std/http/file_server.ts"