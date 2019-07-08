import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuestionInterface } from '../../../interfaces/question.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { QuestionsService } from '../questions.service';
import { ErrorsManagerService } from '../../../services/errors-manager.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit, OnDestroy {
  questionSub: Subscription;
  question: QuestionInterface;
  questionsForm: FormGroup;
  types = ['input-text', 'input-number', 'input-date', 'input-file'];

  constructor(
    private afs: AngularFirestore,
    private fb: FormBuilder,
    private questionsService: QuestionsService,
    private errorsManagerService: ErrorsManagerService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const questionId = this.route.snapshot.params.id;
    this.questionSub = this.questionsService.getQuestionsById$(questionId)
        .pipe(
          map((question) => {
            this.question = question;
            this.initForm(question);
          })
        )
        .subscribe();
  }

  ngOnDestroy() {
    this.questionSub && this.questionSub.unsubscribe();
  }

  initForm(question: QuestionInterface) {
    this.questionsForm = this.fb.group({
      name: [ question.name || '', Validators.required],
      weight: [question.weight || '', Validators.required],
      position: [question.position || '', Validators.required],
      type: [question.type || '', Validators.required],
      section: [question.section || '', Validators.required],
      title: [question.title || '', Validators.required],
      subtitle: [question.subtitle || '', Validators.required],
      placeholder: [question.placeholder || '', Validators.required],
      description_long: [question.description_long || ''],
      description_short: [question.description_short || ''],
      value: [question.value || '']
    })
  }

  onSubmit(value) {
    if (this.questionsForm.valid) {
      this.questionsService.updateQuestion(this.question.uid, value)
          .pipe((obs) => this.errorsManagerService.manageErrors(obs))
          .subscribe();
    }

  }

}
