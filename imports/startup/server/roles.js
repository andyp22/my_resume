import { Roles } from 'meteor/alanning:roles';

// Create some role labels.
if (Roles.getAllRoles().count() === 0) {
  Roles.createRole('admin', Roles.GLOBAL_GROUP);
  Roles.createRole('active', Roles.GLOBAL_GROUP);
  Roles.createRole('inactive', Roles.GLOBAL_GROUP);
  Roles.createRole('verification', Roles.GLOBAL_GROUP);
}
