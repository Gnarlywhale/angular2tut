
import {Component, OnInit} from 'angular2/core'
import {AI} from './ai';
import {AIDetailComponent} from './ai-detail.component';
import {AIService} from './ai.service';


@Component({
    selector: 'my-app',
    directives: [AIDetailComponent],
    providers:[AIService],
    template:`
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="#ai of ais"
      [class.selected]="ai === selectedAI"
      (click)="onSelect(ai)">
      <span class="badge">{{ai.id}}</span> {{ai.name}}

    </ul>
    <my-ai-detail [ai]="selectedAI"></my-ai-detail>
      `,
      styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 10em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0em;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #EEE;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0em 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0px 0px 4px;
    }
  `]

})
export class AppComponent implements OnInit{
  public title = "Salty AIs";
  ais: AI[];
  selectedAI: AI;

  constructor(private _aiService: AIService){};

  onSelect(ai:AI){
    console.log(ai);
    this.selectedAI = ai; }
    ngOnInit(){
      this.getAIs();
    }
    getAIs(){
      this._aiService.getAIs().then(ais => this.ais = ais);
    }
}
