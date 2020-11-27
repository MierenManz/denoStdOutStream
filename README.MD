# deno run but with stdout & stderr streams
## example:
```js
import { stdOutStream } from "./mod.ts"

const process = new stdOutStream()

process.on('stdout', stdout => {
    console.log("stdout: " + stdout)
})
.on('stderr', stderr => {
    console.log("stderr: " + stderr)
})
.on('end', status => {
    console.log(status)
})
.run("ping", "127.0.0.1")
```

## docs for the dumb
  
### **on(): select stream you want to listen for**
can be either `stdout`, `stderr` or `end`  
you may also use all three
```js
import { stdOutStream } from "./mod.ts"

const process = new stdOutStream()

process.on('stdout', stdout => {
    console.log("stdout: " + stdout)
})
.run("ping", "127.0.0.1")
```

### **run(): command Array you want to execute**
Should always be an array  
`process.run("ping", "127.0.0.1")` RIGHT!  
`process.run(["ping", "127.0.0.1"])` WRONG! and will throw an error\

---
# Licence
Use however you like, just credit me plss