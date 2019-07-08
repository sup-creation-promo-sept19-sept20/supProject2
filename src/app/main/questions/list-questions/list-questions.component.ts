import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import {
  map,
  startWith,
} from 'rxjs/operators';
import { QuestionInterface } from '../../../interfaces/question.interface';
import {
  Observable,
  Subscription,
} from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.scss'],
})
export class ListQuestionsComponent implements OnInit, OnDestroy {

  questionSub: Subscription;
  questions: QuestionInterface[];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(private questionsService: QuestionsService) {
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
       .pipe(
         startWith(''),
         map(value => this._filter(value)),
       );

    this.initQuestionsList()

  }

  ngOnDestroy() {
    this.questionSub && this.questionSub.unsubscribe();
  }

  private initQuestionsList() {
    this.questionSub = this.questionsService.getAllQuestions()
       .pipe(
         map((data) => {
           this.questions = data;
         }),
       )
       .subscribe();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
