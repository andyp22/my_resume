import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

// Handle new account creation
Accounts.onCreateUser(function(options, user) {
  // Grab the default profile object if it exists.
  user.profile = (options.profile != undefined) ? options.profile: new Object();
  
  if(user.services)  {
    for(var serviceName in user.services) {
      var service = user.services[serviceName];
      var address;
      var emails = (serviceName == 'password') ? user.emails : service.emails;
      for(var i = 0; i < emails.length; i++) {
        var email = emails[i];
        if(email.primary) {
          address = email.address;
        }
      }
      
      if(service.username && !user.profile.name)  {
        user.profile.name = service.username;
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
    
    // Even worse hackery
    Meteor.users.remove({ _id: existingUser._id }); // Remove the existing record
    return existingUser;              // Record is re-inserted
  }
  
  return user;
});
