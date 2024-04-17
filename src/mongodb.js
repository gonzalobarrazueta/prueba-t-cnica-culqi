const { MongoClient } = require('mongodb');


async function saveResultsDocument(results) {

    const client = new MongoClient(process.env.MONGODB_URI);

    try {
        await client.connect();
        await storeResults(client, results);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function storeResults(client, results) {
    const response = await client.db("culqidb").collection("culqi").insertOne(results);
    console.log(`Document with id: ${response.insertedId} created.`);
}

module.exports = {
    saveResultsDocument
}