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

Template.manStats.helpers({
  name() {
    return manData.name;
  },
  location() {
    return manData.location;
  },
  sex() {
    return manData.sex;
  },
  nationality() {
    return manData.nationality;
  },
  eyes() {
    return manData.eyes;
  },
  hair() {
    return manData.hair;
  },
  dob() {
    return manData.dob;
  },
  github() {
    return manData.github;
  },
});

Template.manActionShot.helpers({
  actionShotUrl() {
    return manData.actionShotUrl;
  },
});

Template.manPOI.helpers({
  poi() {
    const pois = [];
    for (let i = 0; i < manData.poi.length; i++) {
      pois.push({
        name: manData.poi[i],
      });
    }
    return pois;
  },
});

Template.manSkills.helpers({
  skills() {
    return manData.skills;
  },
});

Template.manProjects.helpers({
  projects() {
    return manData.projects;
  },
});

Template.manMissions.helpers({
  missions() {
    return manData.missions;
  },
});

Template.manTraining.helpers({
  training() {
    return manData.training;
  },
});
