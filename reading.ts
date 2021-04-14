// request permissions
const desc = { name: "read", path: "../" } as const;

const status = await Deno.permissions.request(desc);

if (status.state === "granted") {

	const results = await Deno.readDir('../');

	for await (const result of results) {
		console.log(result);
	}

} else {
	console.log("This program needs read permission to run")
}

// deno run --allow-read <file>
// deno run --unstable <file> , when dealing with permissions

export {};