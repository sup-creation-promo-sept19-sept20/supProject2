import {Updatable} from './updatable.model';
import {AngularFirestore} from '@angular/fire/firestore';

export type QuestionType = 'input-text' | 'input-number' | 'input-date' | 'select' | 'select-multi' | 'radio' | 'checkbox';

export class Question extends Updatable<Question> {
  constructor(
    public afs: AngularFirestore,
    public id: string = '',

    public weight: number = 0,
    public position: number = 1,
    public section: number = 1,
    public type: QuestionType = 'input-text',
    public name: string = '',
    public title: string = '',
    public subtitle: string = '',
    public placeholder: string = '',
    public description_long: string = '',
    public description_short: string = '',
    public value?,
    public parent?: Question,
    public children?: Question[],
  ) {
    super('questions', afs);
  }
}
