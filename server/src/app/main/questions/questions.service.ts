import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Question } from '../../models/question.model';
import { QuestionInterface } from '../../interfaces/question.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(
    private afs: AngularFirestore,
  ) {
  }

  getAllQuestions(): Observable<QuestionInterface[]> {
    return this.afs.collection('questions').valueChanges() as Observable<QuestionInterface[]>;
  }

  getQuestionsById$(id: string): Observable<QuestionInterface> {
    return this.afs.doc('questions/' + id).valueChanges() as Observable<QuestionInterface>;
  }

  createQuestion(data: Question): Observable<any> {
    return from(this.afs.collection('questions').add(data));
  }

  updateQuestion(id: string, data: Question): Observable<any> {
    return from(this.afs.doc('questions/' + id).update(data));
  }

  saveQuestionUid(id: string) {
    return from(this.afs.doc('questions/' + id).update({uid: id}));
  }
}
