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
  tasks: string[];
  resume_tasks: string[]
}

export class JobCardComponent extends React.Component<{ job: JobProps, mode?: string }, undefined> {
  getJobHeader(job: JobProps, mode: string = '') {
    if (mode === 'fun') {
      return (
        <Card.Content className="job-header" header={`${job.name}, ${job.organization}, ${job.location}`} />
      );
    }
    return (
      <Card.Content className="job-header" header={`${job.organization} - ${job.location}`} />
    );
  }
  getJobInfo(job: JobProps, mode: string = '') {
    if (mode === 'fun') {
      return (
        <Card.Description>
          <span className="job-dates">{`${job.dates.start} - ${job.dates.end}`}</span>
        </Card.Description>
      );
    }
    return (
      <Card.Description>
        <span className="job-title">{job.name}</span><span className="job-dates">{`${job.dates.start} - ${job.dates.end}`}</span>
      </Card.Description>
    );
  }
  getJobTasks(job: JobProps, mode: string = '') {
    if (mode === 'fun') {
      return (
        <List as="ul">
          {job.tasks.map((task, index) => {
            return (
              <List.Item as="li" key={index}>
                <List.Content>
                  <List.Description>{task}</List.Description>
                </List.Content>
              </List.Item>
            );
          })}
        </List>
      );
    }
    return (
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
    );
  }
  render() {
    const job = this.props.job;
    return (
      <Card fluid>
        {this.getJobHeader(job, this.props.mode)}
        <Card.Content className="job-info">
          {this.getJobInfo(job, this.props.mode)}
        </Card.Content>
        <Card.Content className="job-tasks">
          {this.getJobTasks(job, this.props.mode)}
        </Card.Content>
      </Card>
    );
  }
}

export default JobCardComponent;