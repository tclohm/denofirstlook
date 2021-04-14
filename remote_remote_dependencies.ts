// Deno has verified third party modules for safety

// deno info <file>, to get more info on the file and get a dependency graph
import { path } from "./deps.ts";

console.log(path.basename("/folder/folder/folder/file.txt"));