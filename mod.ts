import { readLines } from "https://deno.land/std@0.79.0/io/bufio.ts"
import EventEmitter from "https://deno.land/std@0.79.0/node/events.ts";
export class stdOutStream extends EventEmitter {
    constructor() {
        super();
    }
    public async run(...command: Array<string>): Promise<void> {
        const p = Deno.run({
            cmd: command,
            stderr: "piped",
            stdout: "piped"
        });
        for await (const line of readLines(p.stdout)) {
            if (line.trim()) super.emit("stdout", line);
        }
        for await (const line of readLines(p.stderr)) {
            if (line.trim()) super.emit("stderr", line);
        }
        super.emit('end', await p.status());
        p.close();
        return;
    }
}