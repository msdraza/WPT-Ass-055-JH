const express=require("express");
const app=express();

const mysql=require('mysql2');
let dbparameters={
    host:"localhost",
    user:"Maswood",
    password:'msd123',
    database:'cdac22',
    port:3306
};
const conn=mysql.createConnection(dbparameters);

app.use(express.static('sf'));
app.get("/pinarea",(req,resp)=>{
    let areaname=req.query.area;
    console.log(areaname);
    let pinstatus={status:false,pincode:''};
  
    conn.query('select * from pincode where area_name=?', [areaname], 
    (err, rows) => {
        if (err) {
            console.log("error has occured let us see");  
        } else {
            if(rows.length>0){
                pinstatus.status=true; 
                pinstatus.pincode=rows[0].pincode;   
        }
    }
    resp.send(pinstatus);
    }
    );

   

});
app.listen(1000, function() {
    console.log("server ia listening to 1000....");
});