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
  const collection = db.collection('todo');
  // Buscamos todo lo que hay con un filtro:
  collection.find({ // Aquí pasamos los datos por los que queremos filtrar!
      "done": false, // En este caso tareas que no están hechas
  }).toArray(function(err, docs) {
      if(err) {
          console.log('Error buscando: ', err);
      }
    console.log("Found the following records");
    console.log(docs)
});

  
  // Cerramos la conexión
  client.close();
});