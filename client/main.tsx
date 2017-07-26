require('../imports/ui/stylesheets/index');

import { Meteor } from 'meteor/meteor';
import * as React from 'react';
import { render } from 'react-dom';
import AppRoutes from '../imports/startup/client/AppRoutes';

Meteor.startup(() => {
  render(<AppRoutes />, document.getElementById('render-target'));
});
