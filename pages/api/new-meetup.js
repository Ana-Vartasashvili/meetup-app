import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);

    const client = await MongoClient.connect(
      "mongodb+srv://ANA_:EOrzId6XZlzePd0G@cluster0.akzpsar.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    console.log(meetupsCollection);

    await meetupsCollection.insertOne(data);

    return res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
