import { ServiceConfiguration } from 'meteor/service-configuration';

Meteor.startup(function() {
  let serviceSettings = {};
  
  if(Meteor.settings)  {
    if(Meteor.settings.private)  {
      if(Meteor.settings.private.services)  {
        serviceSettings = Object.assign({}, Meteor.settings.private.services);
      }
    }
  }
  
  for(var name in serviceSettings) {
    const service = serviceSettings[name];
    
    if(service.clientId && service.secret) {
      // First, remove configuration entry in case service is already configured.
      ServiceConfiguration.configurations.remove({
        service: name
      });
      // Add the service with the current credential set.
      ServiceConfiguration.configurations.insert({
        service: name,
        clientId: service.clientId,
        secret: service.secret
      });
    }
  }
});
