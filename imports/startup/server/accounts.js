import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

// Handle new account creation
Accounts.onCreateUser(function(options, user) {
  // Grab the default profile object if it exists.
  var profile = (options.profile != undefined) ? options.profile: user.profile;
  var service;
  
  if(user.services)  {
    for(var serviceName in user.services) {
      service = user.services[serviceName];
      var address = (service.email) ? service.email : false;
      if(!address) {
        var emails = (serviceName == 'password') ? user.emails : service.emails;
        for(var i = 0; i < emails.length; i++) {
          var email = emails[i];
          if(email.primary) {
            address = email.address;
          }
        }
      }
      
      if(service.username && !profile.name)  {
        profile.name = service.username;
      }
      // Create or merge the profiles if needed.
      if(!user.profile && profile) {
        user.profile = profile;
      } else if(profile) {
        user.profile = Object.assign(profile, user.profile);
      }
      
      if(address)  {
        var _emails = user.emails || new Array();
        _emails.push({ address: address });
        user.emails = _emails;
      } else {
        return user;
      }
    }

    // BEWARE!!! Hackery below
    // See if any existing user has this email address, otherwise create new
    // From http://meteorpedia.com/read/Merging_OAuth_accounts
    var existingUser = Meteor.users.findOne({ 'emails.address': address});
    if(!existingUser) {
      return user;
    }
    
    // Precaution: these will exist from accounts-password if used
    if(!existingUser.services) {
      existingUser.services = {
        resume: {
          loginTokens: []
        }
      };
    }
    if(!existingUser.services.resume) {
      existingUser.services.resume = {
        loginTokens: []
      };
    }
    
    // Copy accross new service info
    existingUser.services[service] = user.services[service];
    if(user.services.resume) {
      if(user.services.resume.loginTokens) {
        existingUser.services.resume.loginTokens.push(
          user.services.resume.loginTokens[0]
        );
      }
    }
    
    // Create or merge the profiles if needed.
    if(!existingUser.profile && user.profile) {
      existingUser.profile = user.profile;
    } else if (user.profile) {
      existingUser.profile = Object.assign(user.profile, existingUser.profile);
    }
    // Even worse hackery
    Meteor.users.remove({ _id: existingUser._id }); // Remove the existing record
    return existingUser;              // Record is re-inserted
  }
  return user;
});
