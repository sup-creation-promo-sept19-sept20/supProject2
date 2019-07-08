import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions.component';
import { ListQuestionsComponent } from './list-questions/list-questions.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { DetailsQuestionComponent } from './details-question/details-question.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionsComponent,
    children: [
      {
        path: 'list-questions',
        component: ListQuestionsComponent
      },
      {
        path: 'creation-question',
        component: CreateQuestionComponent
      },
      {
        path: 'edition-question/:id',
        component: EditQuestionComponent
      },
      {
        path: 'details-question/:id',
        component: DetailsQuestionComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class QuestionsRoutingModule {
}
