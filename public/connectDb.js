const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./db.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  } 
});

// let 

// db.run(sql, null, function(err) {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log(`Rows inserted ${this.changes}`);
//   });
// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;
// document.write(today);
var images;

db.serialize(() => {
  db.all(`SELECT * FROM images`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    images.push(row)
    console.log(images)
    console.log(row.map((ro) => `Hello  ${ro.name}`));
  });
});
console.log(images);

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});
