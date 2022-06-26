const express = require('express');
const app = express();

const mysql = require('mysql2');

app.use(express.static("sf"));

app.listen(550);

app.get('/getareaname', (req, resp) => {
    console.log("ajax function called");
    const dbobject = {
        host: 'localhost',
        user: 'Maswood',
        password: 'msd123',
        database: 'cdac22',
        port: 3306
    }
    const conn = mysql.createConnection(dbobject);

    let output = { status: false, detail: { pincode: 0, areaname: "" } }
    let pincode = req.query.pin;
    console.log(pincode);
    conn.query('select pincode, areaname from location where pincode = ?', [pincode],
        (error, rows) => {
            if (error) {
                console.log(error);
            }
            else {
                if (rows.length > 0) {
                    output.status = true;
                    output.detail = rows[0];
                }
                else {
                    console.log("No area with this pin");
                }
            }
            console.log(output);
            resp.send(output);
        });

});

    app.get('/updateareaname', (req, resp) => {
        console.log("ajax function called");
        const dbobject = {
            host: 'localhost',
            user: 'Maswood',
            password: 'msd123',
            database: 'cdac22',
            port: 3306
        }
        const conn = mysql.createConnection(dbobject);

        let output = { status: false }
        let pincode = req.query.pincode;
        let areaname = req.query.areaname;
        console.log(pincode);
        conn.query('update location set areaname = ? where pin = ?', [areaname, pincode],
            (error, res) => {
                if (error) {
                    console.log(error);
                }
                else {
                    if (res.affectedRows > 0) {
                        output.status = true;
                    }
                    else {
                        console.log("Did not update");
                    }
                }
                console.log(output);
                resp.send(output);
            });
    });