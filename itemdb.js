const url=""
let dbparameters={
    host:'localhost',
    user: 'Maswood',
    password: 'msd123',
    database: 'cdac22',
	port:3306
};
const mysql=require('mysql2');
const conn=mysql.createConnection(dbparameters);
console.log("db adventures");

let a=7;  //assume this came from http request
let b='teabag2';
let c=400
  //assume this came from http request
conn.query('insert into item(itemno,itemname,price) values(?,?,?)', [a,b,c], 
(err, res1) => {
    if (err) {
        console.log("error has occured let us see");  
    } else {
        console.log(res1.affectedRows);     
    }
}
);

