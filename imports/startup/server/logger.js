import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
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
  configs: {},
  init: function(config) {
    this.configs = Object.assign({}, config);
    
    this.configs.hostname = Meteor.absoluteUrl();
    
    logger = new (winston.Logger)({
      exitOnError: false
    });

    logger.add(winston.transports.Console, {
      level: this.configs.isTrace ? 'debug' : 'info',
      handleExceptions: true,
      colorize: true,
      prettyPrint: true
    });

    // for non-dev environments log to Loggly
    if (!this.configs.isDev) {
      logger.add(winston.transports.Loggly, {
        inputToken: this.configs.loggly.token,
        subdomain: this.configs.subdomain,
        tags: this.configs.loggly.tags.concat([
          this.configs.hostname,
          "env." + this.configs.env,
          "instance." + this.configs.instance
        ]),
        json: true,
        level: "info",
        handleExceptions: true
      });
    }
  },

  getInstance: function() {
    return logger;
  },
  
  logglyLog: function(message)  {
    check(message, String);
    logger.info(message, {
      hostname: this.configs.hostname,
      instance: this.configs.instance,
      env: this.configs.env
    });
  }
};
