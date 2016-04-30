import winston from 'winston'; 
require('winston-loggly');

var logger;

module.exports = {

  /**
   * Initialize the logger with a config hash
   * @param config
   * @param config.isDev
   * @param config.isTrace
   * @param config.subdomain
   * @param config.instance
   * @param config.env
   * @param config.loggly
   * @param config.loggly.token
   * @param config.loggly.tags
   */
  init: function(config) {
    logger = new (winston.Logger)({
      exitOnError: false
    });

    logger.add(winston.transports.Console, {
      level: config.isTrace ? 'debug' : 'info',
      handleExceptions: true,
      colorize: true,
      prettyPrint: true
    });

    // for non-dev environments log to Loggly
    if (!config.isDev) {
      logger.add(winston.transports.Loggly, {
        inputToken: config.loggly.token,
        subdomain: config.subdomain,
        tags: config.loggly.tags.concat([
          "app.live-audit-sync",
          "env." + config.env,
          "instance." + config.instance
        ]),
        json: true,
        level: "info",
        handleExceptions: true
      });
    }
  },

  getInstance: function() {
    return logger;
  }
};
