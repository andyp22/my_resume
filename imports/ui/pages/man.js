import './man.html';
import '../data/man.js';

import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

function onManPageRendered()  {
  $('body').addClass('man-background');
}

function onManPageDestroyed()  {
  $('body').removeClass('man-background');
}

Template.manPage.onRendered(onManPageRendered);
Template.manPage.onDestroyed(onManPageDestroyed);

function agentDataHelper() {
  return manData;
}

Template.manPage.helpers({
  agent: agentDataHelper
});

Template.ManStats.helpers({
  agent: agentDataHelper
});

Template.ManActionShot.helpers({
  agent: agentDataHelper
});

Template.ManPOI.helpers({
  agent: agentDataHelper
});

Template.ManSkills.helpers({
  agent: agentDataHelper
});

Template.ManProjects.helpers({
  agent: agentDataHelper
});

Template.ManMissions.helpers({
  agent: agentDataHelper
});

Template.ManTraining.helpers({
  agent: agentDataHelper
});
