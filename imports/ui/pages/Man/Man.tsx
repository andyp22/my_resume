require('./Man.scss');

import * as React from 'react';
import { Container, Header, Checkbox } from 'semantic-ui-react';
import { ResumeComponent } from './components/Resume';
import { FunResumeComponent } from './components/FunResume';

import { SwitchPageComponent } from '../components/SwitchPage';

export class ManComponent extends SwitchPageComponent {
  getPageTitles(): any {
    return {
      state_a: 'Resume',
      state_b: 'Dossier',
    };
  }

  getComponents(): any {
    return {
      state_a: ResumeComponent,
      state_b: FunResumeComponent,
    };
  }
}

export const ManContainer: any = ManComponent;
export default ManContainer;
