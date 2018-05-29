const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;
const url = "mongodb://user:pass@ds237610.mlab.com:37610/mongo-practica";
const dbName ="mongo-practica"

MongoClient.connect(url, function(err, client) {
    if(err) {
        console.log('Errorrrrr: ', err);
        return false;
    }
  console.log("Connected successfully to server");
  
  // Preparamos la base de datos
  const db = client.db(dbName);
  // Aquí dentro empezamos a trabajar con mongo
  const collection = db.collection('todo');
  collection.deleteOne(
      {
          '_id': new mongodb.ObjectId('5b0c2f31fb6fc0292d6fe0c4') // Hay que crear un objeto para pasarle los datos del id,pq ya no deja borrarlo tal cual
      }, function(err, result){
      if(err){
          console.log('Error borando!!!!!');
      }
      console.log('Eliminados los siguientes registros');
      console.log(result.result)
  })
  // cerramos la conexión
    client.close();
}); 

