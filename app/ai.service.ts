import {AI} from './ai';
import {AIS} from './mock-ais';
import {Injectable} from 'angular2/core';

@Injectable()
export class AIService {
  getAIs(){
    return Promise.resolve(AIS);
  }
  getAIsSlowly(){
    return new Promise<AI[]>(resolve =>
      setTimeout(()=> resolve(AIS),2000))
  }
}
