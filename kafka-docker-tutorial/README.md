## How to run

1. If you already created the images, run `docker compose rm -svf` to remove the containers.
2. Start running `docker compose up` to create the images and start kafka with docker.
3. Run `npm install` to install node dependencies.
4. Run the command below to create a kafka topic inside docker:

```
  docker exec -it kafkapc01-kafka /opt/bitnami/kafka/bin/kafka-topics.sh \
  --create \
  --bootstrap-server localhost:9092 \
  --replication-factor 1 \
  --partitions 1 \
  --topic test
```

5. In different terminal, run the commands below to start node producer and node consumer: `npm run start:producer` and `npm run start:consumer`.

---

OR, use the scripts `./scripts/start-kafka.sh` to replace both steps 1 and 2, and the script `./scripts/create-topic.sh` to replace step 4. Don't forget to give execution permission to the shell script with `chmod +x <script_name>`.
