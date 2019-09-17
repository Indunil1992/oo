module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["instance6"] = {
        host: "35.227.96.135",
        port: "3306",
        user: "root",
        password: process.env.Password_sqlinstance6,
        database: "information_schema"
    };
};