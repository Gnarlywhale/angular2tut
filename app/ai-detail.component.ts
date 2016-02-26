import {Component} from 'angular2/core';
import {AI} from './ai';
@Component({
  selector: 'my-ai-detail',
  inputs: ['ai'],
  template: `
  <div *ngIf="ai">
        <h2>{{ai.name}} details!</h2>
        <div><label>id: </label>{{ai.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="ai.name" placeholder="name"/>
        </div>
      </div>
  `
})
export class AIDetailComponent {
  ai: AI;
}
