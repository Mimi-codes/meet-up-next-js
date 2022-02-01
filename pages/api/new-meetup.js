import {MongoClient} from 'mongodb';

//api/new-meetup
//the request object (req) contains data about the incoming requests 
//the response (res) object will be needed for sending back response
// POST /api/new-meetup



async function handler(req, res) {
if (req.method === 'POST') {
const data = req.body;

const {title, image, address, description} = data;
const client = await MongoClient.connect('mongodb+srv://Mariam:nN3fn4dKfyMyWNAc@cluster0.pmuqv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
const db = client.db();

const meetupsCollection = db.collection('meetups');
const result = await meetupsCollection.insertOne(data);
console.log(result);

client.close();
res.status(201).json({message: 'Meetup inserted!'});
}
}

export default handler;