import { desc, run, task, sh } from "https://deno.land/x/drake@v1.5.2/mod.ts";

desc("Min Drake task");
task("hello", [], async function () {
	console.log("Hello world!");
	await sh("deno run --allow-env main.ts");
});

run()