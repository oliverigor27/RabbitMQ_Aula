import { connect } from "amqplib";

async function consumerServer()
{
    try 
    {
        const connection = await connect("amqp://localhost:5672");
        const channel = await connection.createChannel();

        const result = await channel.assertQueue("jobs");

        channel.consume("jobs", message => {
            const input = JSON.parse(message.content.toString());

            console.log(input);
            console.log(result.consumerCount);

            if(input.role == "Worker")
                channel.ack(message);
        });

        console.log("Waiting for messages");

    } catch (error) 
    {
        throw error;
    }
}

consumerServer();