# 使用docker的node 测试，使用了本地卷存储

## 代码片段

### 创建数据库卷和网络并启动

```
docker volume create mongodb
docker volume create mongodb_config

docker network create mongodb


docker run -it --rm -d -v mongodb:/data/db \
  -v mongodb_config:/data/configdb -p 27017:27017 \
  --network mongodb \
  --name mongodb \
  mongo




```
### 运行容器并指定数据库连接


```

  docker run \
  -it --rm -d \
  --network mongodb \
  --name rest-server \
  -p 8000:8000 \
  -e CONNECTIONSTRING=mongodb://mongodb:27017/yoda_notes \
  node-docker

```

