# 使用docker的node 测试，使用了本地卷存储，通过使用compose文件进行启动

## 代码片段

```


version: '3.8'

services:
 notes:
  build:
   context: .
  ports:
   - 8000:8000
   - 9229:9229
  environment:
   - SERVER_PORT=8000
   - CONNECTIONSTRING=mongodb://mongo:27017/notes
  volumes:
   - ./:/app
  command: npm run debug

 mongo:
  image: mongo:4.2.8
  ports:
   - 27017:27017
  volumes:
   - mongodb:/data/db
   - mongodb_config:/data/configdb
volumes:
 mongodb:
 mongodb_config:


```

## 启动容器

```

docker-compose -f docker-compose.dev.yml up --build

```
