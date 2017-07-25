require('./FunResume.scss');

import * as React from 'react';
import { Segment, Container, List, Header } from 'semantic-ui-react';
import { JobCardComponent } from '../JobCard';
import { ProjectComponent } from '../Project';

import data from '../../../../data/man';

const ListGroupItem = props => {
  return (
    <List.Item className="list-group-item">
      <span className="label">{props.label}:</span> {props.value}
    </List.Item>
  );
};

const ManStats = props => {
  return (
    <List className="list-group">
      <ListGroupItem label="Name" value={props.name} />
      <ListGroupItem
        label="Location"
        value={`${props.location.city}, ${props.location.state}, ${props.location.country}`}
      />
      <ListGroupItem label="Sex" value={props.sex} />
      <ListGroupItem label="Nationality" value={props.nationality} />
      <ListGroupItem label="Eyes" value={props.eyes} />
      <ListGroupItem label="Hair" value={props.hair} />
      <ListGroupItem label="D.O.B" value={props.dob} />
      <ListGroupItem
        label="Safehouse"
        value={<a href={props.github} target="_blank" title="Github User Account">Github</a>}
      />
    </List>
  );
}

const ManSpanList = props => {
  return (
    <Container className="man-span-list">
      {props.items.map((item, index) => {
        return <span key={index} className={`${props.classes} badge`}>{item.name || item}</span>;
      })}
    </Container>
  );
}

export class FunResumeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'normal',
    }
  }
  render() {
    const props = this.props;
    return (
      <Segment.Group horizontal id="fun-resume">
        <Segment>
          <Container id="agent-information">
            <Header as="h2">Agent Information</Header>
            <picture>
              <source srcSet={`images/${data.actionShotFilename}Closeup.jpg`} media="(max-width: 992px)" />
              <source srcSet={`images/${data.actionShotFilename}.jpg`} media="(max-width: 992px)" />
              <img src={`images/${data.actionShotFilename}.jpg`} alt="Image of the agent standing out in the open, surrounded by the environment." />
            </picture>
            <ManStats {...data} />
          </Container>
          <Container id="agent-skills">
            <Header as="h3">Skills</Header>
            <ManSpanList classes="agent-skill" items={data.skills} />
          </Container>
          <Container id="agent-poi">
            <Header as="h3">Points of Interest</Header>
            <ManSpanList classes="agent-poi" items={data.poi} />
          </Container>
          <Container id="agent-projects">
            <Header as="h3">Projects of Note</Header>
            <List>
              {data.projects.map((project, index) => {
                return (
                  <List.Item key={index}>
                    <List.Content>
                      <ProjectComponent project={project} mode="fun" />
                    </List.Content>
                  </List.Item>
                );
              })}
            </List>
          </Container>
        </Segment>
        <Segment>
          <Container id="agent-missions">
            <Header as="h3">Mission History</Header>
            <List>
              {data.missions.map((mission, index) => {
                return (
                  <List.Item key={index}>
                    <List.Content>
                      <JobCardComponent job={mission} mode="fun" />
                    </List.Content>
                  </List.Item>
                );
              })}
            </List>
          </Container>
          <Container id="agent-training">
            <Header as="h3">Training</Header>
            <List>
              {data.training.map((training, index) => {
                return (
                  <List.Item key={index}>
                    <List.Content>
                      <List.Header>{training.name}</List.Header>
                      <List.Description>
                        {training.degree
                          ? (`Studied ${training.studied} from ${training.attended} and received an ${training.degree}`)
                          : (`Studied ${training.studied} off and on from ${training.attended}`)}
                      </List.Description>
                    </List.Content>
                  </List.Item>
                );
              })}
            </List>
          </Container>
        </Segment>
      </Segment.Group>
    );
  }
}

export default FunResumeComponent;
