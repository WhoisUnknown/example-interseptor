# Example of bug

### Environment
- node@18.16.1
- @mswjs\interceptors@0.36.10

### Run
```
npm i
npx ts-node index.ts
```

### Get error 

```
TypeError: this._getSession is not a function
    at HttpsProxyAgent.createConnection (node:https:140:26)
    at MockHttpSocket.passthrough (example/node_modules/@mswjs/interceptors/src/interceptors/ClientRequest/MockHttpSocket.ts:160:25)
    at _ClientRequestInterceptor.onRequest (example/node_modules/@mswjs/interceptors/src/interceptors/ClientRequest/index.ts:151:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)

Node.js v18.16.1
```