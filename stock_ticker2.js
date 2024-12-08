var http = require('http');
var urlObj = require('url');
var mongo = require('mongodb');
var port = process.env.PORT || 3000;
//var port = 8080;   //uncomment to run local

var MongoClient = mongo.MongoClient;

var connectionString = "mongodb+srv://brendancalalang:UNHhhh270@cluster0.e90lj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

http.createServer(function (req, res) {
    var purl = urlObj.parse(req.url, true);
    //res.write(purl.pathname);
    var path = purl.pathname;
    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Form</h1>')

        // writes form
        var form = "<form method='get' action='/process'><input name='company' type='text'><br>";
        form += "<input name='format' type='radio' value='comp'>company";
        form += "<input name='format' type='radio' value='ticker'>ticker<br>";
        form += "<input type='submit'>"
        form += "</form>";
        res.write(form);
        res.end();
    }
    else if (path == '/process') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Processing</h1>');
        compQuery = purl.query.company;

        // connects to database
        MongoClient.connect(connectionString,
            async function(err, account) {
            if(err) {
            console.log("Connection err: " + err);
            return;
            }
            var dbObj = account.db("Stock");
        
            var collection = dbObj.collection("PublicCompanies");

            // changes query based on if the user entered the company or the ticker
            if (purl.query.format == "comp") {
                searchQuery = {company:compQuery};
            }
            if (purl.query.format == "ticker") {
                searchQuery = {ticker:compQuery};
            }

            // searches the database
            result = await collection.find(searchQuery).toArray();

            if (result.length == 0) {
                console.log("No companies found matching this identifier");
            } else {
                for (i = 0; i < result.length; i++) {
                    console.log("Company: " + result[i].company + " Ticker: " + result[i].ticker + " Price: " + result[i].price);
                    res.write("Company: " + result[i].company + " Ticker: " + result[i].ticker + " Price: " + result[i].price + "<br>");
                }
            }

            res.end();
            
        });

      }

}).listen(port);
