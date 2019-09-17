const client = require("./connection.js");
const { exec } = require("child_process");

const hosts = ["1.1.1.1", "8.8.8.8"];

function tryPing() {
  const result = {
    dateTime: new Date(),
    host: hosts[Math.floor(Math.random() * hosts.length)],
    min: -1,
    avg: -1,
    max: -1
  };

  try {
    exec(`ping -c 3 ${result.host}`, (err, stdout, stderr) => {
      if (stderr.length == 0) {
        console.log(stdout);
        let lines = stdout.split("\n");
        let minMaxAverageLine = lines[lines.length - 2];
        let minMaxAverage = minMaxAverageLine
          .substr(23)
          .split("/")
          .reverse()
          .slice(1)
          .reverse();
        result.min = parseFloat(minMaxAverage[0]);
        result.avg = parseFloat(minMaxAverage[1]);
        result.max = parseFloat(minMaxAverage[2]);

        client.index(
          {
            index: "pings",
            type: "ping",
            body: result
          },
          function(err, resp, status) {
            console.log(resp);
          }
        );
      }
    });
  } catch (e) {
    console.log(e);
  }
}

tryPing();
// setInterval(tryPing, 10000);
