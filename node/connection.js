var elasticsearch = require("elasticsearch");

var client = new elasticsearch.Client({
  hosts: ["http://elasticsearch:9200"]
});

module.exports = client;
