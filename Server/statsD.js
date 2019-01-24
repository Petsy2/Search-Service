const StatsD = require("node-statsd");
const client = new StatsD({
  host: "157.230.89.253"
});

client.socket.on("error", function(error) {
  return console.error("Error in socket: ", error);
});

module.exports = function expressStatsdInit(options) {
  return function expressStatsd(req, res, next) {
    var startTime = new Date().getTime();

    // Function called on response finish that sends stats to statsd
    function sendStats() {
      var ipAdr = process.env.HOSTNAME || "unknownIP";
      ipAdr = ipAdr.replace(/\./gi, "");
      var key = ipAdr + "." + req.statsdKey + ".";
      // Status Code
      var statusCode = res.statusCode || "unknown_status";
      client.increment(key + "status_code." + statusCode);
      client.increment(key + "request");
      // Response Time
      var duration = new Date().getTime() - startTime;
      client.timing(key + "response_time", duration);
      client.timing(key + "dbQueryTime", req.dbQueryTime);
      cleanup();
    }

    // Function to clean up the listeners we've added
    function cleanup() {
      res.removeListener("finish", sendStats);
      res.removeListener("error", cleanup);
      res.removeListener("close", cleanup);
    }

    // Add response listeners
    res.once("finish", sendStats);
    res.once("error", cleanup);
    res.once("close", cleanup);

    if (next) {
      next();
    }
  };
};
