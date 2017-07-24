require('./Resume.scss');

import * as React from 'react';
import { Container, Header, Checkbox, Segment, Divider, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
  render() {
    const props = this.props;
    const skills = {};
    data.skills.forEach(skill => {
      if (skills[skill.category]) {
        skills[skill.category] = `${skills[skill.category]}, ${skill.name}`;
      } else {
        skills[skill.category] = skill.name;
      }
    });
    return (
      <Container>
        <Segment>
          <Header as="h2">{data.name}</Header>
          <p>{data.email} / {data.blog}</p>
        </Segment>
        <Divider />
        <Segment>
          <p><span className="bolded">Summary of expertise:</span>{data.summary}</p>
          <Header as="h3">Relevant Skills</Header>
          <List>
            {categories.map((cat, index) => {
              return (
                <List.Item>
                  <List.Content>
                    <List.Header>{cat.name}</List.Header>
                    <List.Description>{skills[cat.id]}</List.Description>
                  </List.Content>
                </List.Item>
              );
            })}
            <List.Item>
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
      </Container>
    );
  }
}

export default ResumeComponent;
