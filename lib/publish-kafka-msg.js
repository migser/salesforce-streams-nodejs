import {
    Producer
} from 'no-kafka';

const producer = new Producer({
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

export default publishKafkaMsg;