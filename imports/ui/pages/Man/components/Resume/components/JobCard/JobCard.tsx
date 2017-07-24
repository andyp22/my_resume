require('./JobCard.scss');

import * as React from 'react';
import { List, Card } from 'semantic-ui-react';

export interface JobProps {
  name: string;
  description: string;
  organization: string;
  location: string;
  dates: {
    start: string;
    end: string;
  };
  tasks?: string[];
  resume_tasks: string[]
}

export class JobCardComponent extends React.Component<{ job: JobProps }, undefined> {
  render() {
    const job = this.props.job;
    return (
      <Card fluid>
        <Card.Content className="job-header" header={`${job.organization} - ${job.location}`} />
        <Card.Content className="job-info">
          <Card.Description>
            <span className="job-title">{job.name}</span><span className="job-dates">{`${job.dates.start} - ${job.dates.end}`}</span>
          </Card.Description>
        </Card.Content>
        <Card.Content className="job-tasks">
          <List as="ul">
            {job.resume_tasks.map((task, index) => {
              return (
                <List.Item as="li" key={index}>
                  <List.Content>
                    <List.Description dangerouslySetInnerHTML={{ __html: task }} />
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

export default JobCardComponent;