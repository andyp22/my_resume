require('./Resume.scss');

import * as React from 'react';
import { Container, Header, Checkbox, Segment, Divider, List, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { JobCardComponent } from '../JobCard';
import { ProjectComponent } from '../Project';

import data from '../../../../data/man';

const categories = [
  {
    name: 'Programming/Web',
    id: 'web',
  },
  {
    name: 'Database',
    id: 'data',
  },
  {
    name: 'Quality',
    id: 'quality',
  },
  {
    name: 'OS',
    id: 'os',
  },
  {
    name: 'Other',
    id: 'other',
  },
];

export class ResumeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'normal',
    }
  }

  formatSkills(skillsList: any[]): any {
    const skills = {};
    skillsList.forEach(skill => {
      if (skills[skill.category]) {
        skills[skill.category] = `${skills[skill.category]}, ${skill.name}`;
      } else {
        skills[skill.category] = skill.name;
      }
    });
    return skills;
  }

  render() {
    const props = this.props;
    const skills = this.formatSkills(data.skills);
    return (
      <Container id="resume" textAlign="left">
        <Segment id="resume-header" textAlign="center">
          <Header as="h2">{data.name}</Header>
          <p>{data.email} / {data.blog}</p>
        </Segment>
        <Divider />
        <Segment id="resume-summary">
          <Header as="h2">Summary of expertise</Header>
          <p>{data.summary}</p>
          <Header as="h3">Relevant Skills</Header>
          <List>
            {categories.map((cat, index) => {
              return (
                <List.Item key={index}>
                  <List.Content>
                    <List.Header>{cat.name}</List.Header>
                    <List.Description>{skills[cat.id]}</List.Description>
                  </List.Content>
                </List.Item>
              );
            })}
            <List.Item key={categories.length}>
              <List.Content>
                <List.Header>Github:</List.Header>
                <List.Description>
                  <Link to={data.github} target="_blank">{data.github}</Link>
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Segment>
        <Divider />
        <Segment id="resume-experience">
          <Header as="h3">Experience</Header>
          <List>
            {data.missions.map((mission, index) => {
              return (
                <List.Item key={index}>
                  <List.Content>
                    <JobCardComponent job={mission} />
                  </List.Content>
                </List.Item>
              );
            })}
          </List>
        </Segment>
        <Divider />
        <Segment id="resume-education">
          <Header as="h3">Education</Header>
          <List>
            {data.training.map((training, index) => {
              return (
                <List.Item key={index}>
                  <List.Content>
                    {training.name}, {(training.degree) ? `${training.degree} ` : ''}{training.studied}
                  </List.Content>
                </List.Item>
              );
            })}
          </List>
        </Segment>
        <Segment id="resume-projects">
          <Header as="h3">Personal Projects</Header>
          <List>
            {data.projects.map((project, index) => {
              return (
                <List.Item key={index}>
                  <List.Content>
                    <ProjectComponent project={project} />
                  </List.Content>
                </List.Item>
              );
            })}
          </List>
        </Segment>
        <Segment id="resume-interests">
          <Header as="h3">Interests</Header>
          <p>{data.poi.join(', ')}</p>
        </Segment>
      </Container>
    );
  }
}

export default ResumeComponent;
