
const mysql=require('mysql2');
let dbparameters={
    host:"localhost",
    user:"Maswood",
    password:'msd123',
    database:'cdac22',
    port:3306
};
const conn=mysql.createConnection(dbparameters);
console.log("database connction");

let arnm='malegaon';  //assume this came from http request  //assume this came from http request
conn.query('select * from pincode where area_name=?', [arnm], 
(err, rows) => {
    if (err) {
        console.log("error has occured let us see");  
    } else {
        if(rows.length>0){
            console.log(rows[0].area_name);
      console.log(rows[0].pincode+" ");       
    }
}
}
);