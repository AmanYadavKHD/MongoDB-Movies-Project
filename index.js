const MongoClient = require("mongodb").MongoClient;

// Replace the uri string with your connection string.
const uri = "mongodb+srv://AmanYadav:Am%4001122003@atlascluster.xnvy8eb.mongodb.net/";

const client = new MongoClient(uri,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Jurassic Park' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


//mongodb+srv://AmanYadav:Am%4001122003@atlascluster.xnvy8eb.mongodb.net/?retryWrites=true&w=majority (This is the connection id.)
// This is found inside the sample database made inside mongoDB.



