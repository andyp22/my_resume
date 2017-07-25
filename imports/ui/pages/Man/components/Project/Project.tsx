require('./Project.scss');

import * as React from 'react';
import { List, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface ProjectLink {
  url: string;
  text: string;
  fun_text: string;
  label: string;
  title: string;
}

export interface ProjectProps {
  name: string;
  description: string;
  links: ProjectLink[];
}

export class ProjectComponent extends React.Component<{ project: ProjectProps, mode?: string }, undefined> {
  getListItemContent(link: ProjectLink, mode: string = '') {
    if (mode === 'fun') {
      return (
        <List.Content>
          <List.Description>
            {`${link.label}: `}<Link to={link.url} target="_blank">{link.fun_text}</Link>
          </List.Description>
        </List.Content>
      );
    }
    return (
      <List.Content>
        <List.Description>
          {`${link.text}: `}<Link to={link.url} target="_blank">{link.url}</Link>
        </List.Description>
      </List.Content>
    );
  }
  getCardContent(project: ProjectProps, mode: string = '') {
    if (mode === 'fun') {
      return (
        <Card.Content className="project-info">
          <Card.Header className="project-name">
            {project.name}
          </Card.Header>
          <Card.Description className="project-description">
            {project.description}
          </Card.Description>
        </Card.Content>
      );
    }
    return (
      <Card.Content className="project-info">
        <Card.Description>
          <span className="project-name">{project.name} - </span><span className="project-description">{project.description}</span>
        </Card.Description>
      </Card.Content>
    );
  }
  render() {
    const project = this.props.project;
    return (
      <Card fluid>
        {this.getCardContent(project, this.props.mode)}
        <Card.Content className="project-links">
          <List as="ul">
            {project.links.map((link, index) => {
              return (
                <List.Item as="li" key={index}>
                  {this.getListItemContent(link, this.props.mode)}
                </List.Item>
              );
            })}
          </List>
        </Card.Content>
      </Card>
    );
  }
}

export default ProjectComponent;