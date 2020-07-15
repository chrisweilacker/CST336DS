const express = require("express");
const app = express();
var faker = require('faker');
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res) {
    let fake = {
        companyName: faker.company.companyName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email()
        
    };
    res.render("index.ejs", {
        companyName: faker.company.companyName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email()
    });
});

app.get("/datamining", function(req, res) {
    let fake = {
        companyName: faker.company.companyName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email()
    };
    res.render("datamining.ejs",{
        companyName: faker.company.companyName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email()
    });
});

app.get("/datavisualization", function(req, res) {
    let fake = {
        companyName: faker.company.companyName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email()
        
    };
    res.render("datavisualization.ejs", {
        companyName: faker.company.companyName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email()
    });
});

app.get("/machinelearning", function(req, res) {
    let fake = {
        companyName: faker.company.companyName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email()
        
    };
    res.render("machinelearning.ejs", {
        companyName: faker.company.companyName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email()
    });
});


//starting server 
app.listen(process.env.PORT, process.env.IP, function() {
    console.log(`Express server is running on ${process.env.IP} and port  ${process.env.PORT}`);
});

