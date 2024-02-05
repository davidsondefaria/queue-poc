console.log("producer...");
import Kafka from "node-rdkafka";

const stream = Kafka.Producer.createWriteStream(
  {
    "metadata.broker.list": "localhost:9092",
  },
  {},
  { topic: "test" }
);

const queueMessage = () => {
  const success = stream.write(Buffer.from("Hi"));
  if (success) {
    console.log("message wrote successfully to stream");
  } else {
    console.log("something went wrong...");
  }
};

setInterval(() => {
  queueMessage();
}, 3000);
