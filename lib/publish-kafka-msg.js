const Kafka = require('no-kafka');

const producer = new Kafka.Producer({
    connectionString: process.env.KAFKA_URL,
    ssl: {
        cert: process.env.KAFKA_CLIENT_CERT || '.ssl/client.crt',
        key: process.env.KAFKA_CLIENT_CERT_KEY || '.ssl/client.key'
    }
});

producer.init();



function publishKafkaMsg(message, topic) {
    return producer.send({
        topic,
        partition: 0,
        message
    });
}

module.exports = publishKafkaMsg;