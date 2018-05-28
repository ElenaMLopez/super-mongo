const MongoClient = require('mongodb').MongoClient;
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
  // Insert: Para inserter, si no dices el tipo el mira si es uno o varios.
  const collection = db.collection('todo');
  
  collection.insert({ 
      "title":"Insertar en Mongooo",
      "done": true,
  }, function(err, result){
      if(err) {
          console.error('Error insertando en mongooooo', err)
      }
      console.log(result);
      
  });
  
  // Cerramos la conexión
  client.close();
});