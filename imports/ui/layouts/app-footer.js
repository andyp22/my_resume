import './app-footer.html';

import { Template } from 'meteor/templating';

Template.ApplicationFooter.helpers({
  version() {
    return 'v0.5.5';
  }
});
