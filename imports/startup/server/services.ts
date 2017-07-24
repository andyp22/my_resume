import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

Meteor.startup(() => {
  let serviceSettings = {};

  if (Meteor.settings) {
    if (Meteor.settings.private) {
      if (Meteor.settings.private.services) {
        serviceSettings = Object.assign({}, Meteor.settings.private.services);
      }
    }
  }

  for (const name in serviceSettings) {
    if (Object.hasOwnProperty.call(serviceSettings, name)) {
      const service = serviceSettings[name];

      if (service.clientId && service.secret) {
        // First, remove configuration entry in case service is already configured.
        ServiceConfiguration.configurations.remove({
          service: name,
        });
        // Add the service with the current credential set.
        ServiceConfiguration.configurations.insert({
          service: name,
          clientId: service.clientId,
          secret: service.secret,
        });
      }
    }
  }
});
