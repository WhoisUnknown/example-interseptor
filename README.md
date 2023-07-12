# Example of bug

### Environment
- node@18.16.1
- @mswjs\interceptors@0.23.0

### Run
```
npm i
npx ts-node index.ts
```

### Get error 

```
node:_http_client:189
    throw new ERR_INVALID_PROTOCOL(protocol, expectedProtocol);
    ^

TypeError [ERR_INVALID_PROTOCOL]: Protocol "https:" not supported. Expected "http:"
    at new NodeError (node:internal\errors:399:5)
    at new ClientRequest (node:_http_client:189:11)
    at new _NodeClientRequest (folder\node_modules\@mswjs\interceptors\lib\node\chunk-4YIZAGXJ.js:146:5)
    at Object.<anonymous> (folder\node_modules\@mswjs\interceptors\lib\node\chunk-4YIZAGXJ.js:665:22)
    at Object.<anonymous> (folder\dist\scripts\test.js:58:7)
    at Module._compile (node:internal\modules\cjs\loader:1256:14)
    at Module._extensions..js (node:internal\modules\cjs\loader:1310:10)
    at Module.load (node:internal\modules\cjs\loader:1119:32)
    at Module._load (node:internal\modules\cjs\loader:960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal\modules\run_main:81:12) {
  code: 'ERR_INVALID_PROTOCOL'
}

Node.js v18.16.1
```