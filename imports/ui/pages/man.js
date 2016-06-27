import './man.html';

import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import { manData } from '/imports/ui/data/man.js';

function onManPageRendered() {
  $('body').addClass('man-background');
}

function onManPageDestroyed() {
  $('body').removeClass('man-background');
}

Template.manPage.onRendered(onManPageRendered);
Template.manPage.onDestroyed(onManPageDestroyed);

function agentDataHelper() {
  return manData;
}

Template.manPage.helpers({
  agent: agentDataHelper,
});

Template.manStats.helpers({
  agent: agentDataHelper,
});

Template.manActionShot.helpers({
  agent: agentDataHelper,
});

Template.manPOI.helpers({
  agent: agentDataHelper,
});

Template.manSkills.helpers({
  agent: agentDataHelper,
});

Template.manProjects.helpers({
  agent: agentDataHelper,
});

Template.manMissions.helpers({
  agent: agentDataHelper,
});

Template.manTraining.helpers({
  agent: agentDataHelper,
});
