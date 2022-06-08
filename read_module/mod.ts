import { join } from "https://deno.land/std@0.142.0/path/mod.ts";

async function read() {
	const path = join('.', 'hello_world.txt');

	const data = await Deno.readTextFile(path);

	console.log(data);
}

await read();