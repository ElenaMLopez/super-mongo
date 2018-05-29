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
  // Con el siguiente comando lo que hacemos es un update de las tareas que están en false para ponerlas a true
  //le pasamo un objeto como primer parámetro y luego 
  // si se quiere actualizar todos, es update.many
  
  collection.update({ done : false }, 
  { $set: { done : true } }, 
  function(err, result) {
      if(err){
          console.log('Error en el updateeee!!!!');
      }   
      console.log(result.result);

}); 

  
  // Cerramos la conexión
  client.close();
});