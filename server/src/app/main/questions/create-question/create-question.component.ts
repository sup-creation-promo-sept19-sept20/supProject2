import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { QuestionsService } from '../questions.service';
import { ErrorsManagerService } from '../../../services/errors-manager.service';
import { map, switchMap } from 'rxjs/operators';
import { QuestionInterface } from '../../../interfaces/question.interface';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit {

  question: QuestionInterface;
  questionsForm: FormGroup;
  types = ['input-text', 'input-number', 'input-date', 'input-file'];

  constructor(
    private afs: AngularFirestore,
    private fb: FormBuilder,
    private questionsService: QuestionsService,
    private errorsManagerService: ErrorsManagerService
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.questionsForm = this.fb.group({
      name: ['', Validators.required],
      weight: ['', Validators.required],
      position: ['', Validators.required],
      type: ['', Validators.required],
      section: ['', Validators.required],
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      placeholder: ['', Validators.required],
      description_long: ['', Validators.required],
      description_short: ['', Validators.required],
      value: ['']
    })
  }

  onSubmit(value) {
    if (this.questionsForm.valid) {
      this.questionsService.createQuestion(value)
          .pipe(
            map((data) => {
              this.questionsForm.reset();
              return data.id;
            }),
            switchMap((questionUid) => {
              return this.questionsService.saveQuestionUid(questionUid);
            })
          )
          .pipe((obs) => this.errorsManagerService.manageErrors(obs))
          .subscribe();
    }

  }

}
