let express  = require("express");
let mongoose = require("mongoose");
let config   = require("./config/config");
let am       = require("./middleware/AppMiddleware"); 
let mongourl = config.mongourl
let app      = express();
let connect  = mongoose.connect(mongourl);
let PORT     = config.port;
let api = require("./api/api");
am(app);
app.use("/api", api);
app.use((err, req, res, next)=>{
    res.json({ "err": "Server Fault" });
})
app.listen(PORT, () => {
    console.log(`[+] WEB SERVER RUNNING ON PORT ${PORT}`);
    console.log(`[+] DATABASE SERVER RUNNING ON URL ${mongourl}`);
})
module.exports = app;