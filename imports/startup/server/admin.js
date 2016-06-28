import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  // Create an admin user if one does not exist.
  if (Meteor.users.find().count() === 0) {
    const bTesting = true;
    const adminPassword = (bTesting) ? 'test' : 'ch3wbawkan3s3!';
    // Admin account.
    const id = Accounts.createUser({
      username: 'admin',
      email: 'andrew.page32@gmail.com',
      password: adminPassword,
      profile: {
        name: 'Admin',
      },
    });
    Roles.addUsersToRoles(id, ['admin'], Roles.GLOBAL_GROUP);
  }
});
