import { connect } from 'amqplib';

const msg = {
    username: "JohnDoe",
    email: "johndoe@gmail.com",
    password: "AD5s45a4dQd4s54dDa@w24e2dw@#@",
    role: "Worker"
}

async function publisherServer()
{
    try 
    {
        const connection = await connect("amqp://localhost:5672");
        const channel = await connection.createChannel();

        const result = await channel.assertQueue("jobs");

        channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));

        console.log("Job was sent successfully!");
    } catch (error) 
    {
        throw error;
    }
}

publisherServer();