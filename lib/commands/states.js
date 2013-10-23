// Generated by CoffeeScript 1.6.2
(function() {
  module.exports = function(message, next) {
    var models, stateName;

    models = message.mediator.router.models;
    for (stateName in message.options) {
      models.set("states." + stateName, message.options[stateName]);
    }
    return next();
  };

}).call(this);