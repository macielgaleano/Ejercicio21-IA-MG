module.exports =  (query, callBack) => {
  const connection = mysql.createConnection(config);
  connection.connect(function(err){
    if(err) throw err;
    console.log('DB conncected!🐦')
    connection.query(query, (err, users) => {
      if(err) throw err;
      connection.end();
      cb(users);
    })
  }); 
}