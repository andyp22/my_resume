require('./Project.scss');

import * as React from 'react';
import { List, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface ProjectLink {
  url: string;
  text: string;
  fun_text?: string;
  label: string;
  title: string;
}

export interface ProjectProps {
  name: string;
  description: string;
  links: ProjectLink[];
}

export class ProjectComponent extends React.Component<{ project: ProjectProps }, undefined> {
  render() {
    const project = this.props.project;
    return (
      <Card fluid>
        <Card.Content className="project-info">
          <Card.Description>
            <span className="project-name">{project.name} - </span><span className="project-description">{project.description}</span>
          </Card.Description>
        </Card.Content>
        <Card.Content className="project-links">
          <List as="ul">
            {project.links.map((link, index) => {
              return (
                <List.Item as="li" key={index}>
                  <List.Content>
                    <List.Description>
                      {`${link.text}: `}<Link to={link.url} target="_blank">{link.url}</Link>
                    </List.Description>
                  </List.Content>
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