import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup( function() {
  // Create an admin user if one does not exist.
  if ( Meteor.users.find().count() === 0 ) {
    var bTesting = true;
    var admin_password = (bTesting) ? 'test': 'ch3wbawkan3s3!';
    // Admin account.
      var id = Accounts.createUser({
          username: 'admin',
          email: 'andrew.page32@gmail.com',
          password: admin_password,
          profile: {
              name: 'Admin'
          }
      });
    Roles.addUsersToRoles(id, ['admin'], Roles.GLOBAL_GROUP);
  }
});
