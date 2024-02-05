import Kafka from "node-rdkafka";
import eventType from "../eventType.js";
console.log("producer...");

const stream = Kafka.Producer.createWriteStream(
  {
    "metadata.broker.list": "localhost:9092",
  },
  {},
  { topic: "test" }
);

const getRandomAnimal = () => {
  const categories = ["CAT", "DOG"];
  return categories[Math.floor(Math.random() * categories.length)];
};
const getRandomNoise = (animal) => {
  if (animal === "CAT") {
    const noises = ["purr", "meow"];
    return noises[Math.floor(Math.random() * noises.length)];
  }
  if (animal === "DOG") {
    const noises = ["bark", "woof"];
    return noises[Math.floor(Math.random() * noises.length)];
  }
};

const queueMessage = () => {
  const category = getRandomAnimal();
  const noise = getRandomNoise(category);

  const event = { category, noise };
  const buffer = eventType.toBuffer(event);
  const success = stream.write(buffer);

  if (success) {
    console.log("message wrote successfully to stream");
  } else {
    console.log("something went wrong...");
  }
};

setInterval(() => {
  queueMessage();
}, 3000);
