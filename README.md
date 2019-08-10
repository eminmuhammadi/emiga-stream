# emiga-stream
#### Video stream using Express.js , Socket.io

## Installing
```bash
npm install
```

## Run
```bash
npm run dev
```
### Run separately
```bash
npm run server
```

```bash
npm run proxy
```

### Configure
```json
{
  "Server" : {
    "settings" :{
      "port"   : "8000",
      "socket" : "8001"
    }
  },
  "Proxy" : {
    "settings" :{
      "port"         : "8002",
      "storage_path" : "storage",
    }
  }
}
```

### That's all Folks
