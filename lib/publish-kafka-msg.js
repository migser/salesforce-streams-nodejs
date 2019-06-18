const Kafka = require('no-kafka');

const producer = new Kafka.Producer({
    connectionString: process.env.KAFKA_URL,
    ssl: {
        cert: process.env.KAFKA_CLIENT_CERT || '.ssl/client.crt',
        key: process.env.KAFKA_CLIENT_CERT_KEY || '.ssl/client.key'
    }
});

producer.init();



function publishKafkaMsg(_message, _topic) {
    console.error(`Vamos a publicar ${_message} en ${_topic}`);
    return producer.send({
        topic: process.env.KAFKA_PREFIX + _topic,
        partition: 0,
        message: {
            // value: _message.payload.ChangeEventHeader.entityName
            value: _message
        }
    });
}

module.exports = publishKafkaMsg;