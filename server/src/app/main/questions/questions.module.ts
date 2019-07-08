import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';
import { QuestionsRoutingModule } from './questions.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatGridListModule,
  MatDividerModule,
  MatExpansionModule,
  MatAutocompleteModule,
} from '@angular/material';
import { DetailsQuestionComponent } from './details-question/details-question.component';
import { ListQuestionsComponent } from './list-questions/list-questions.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    QuestionsRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
    MatGridListModule,
    MatDividerModule,
    MatExpansionModule,
    MatAutocompleteModule
  ],
  declarations: [
    QuestionsComponent,
    DetailsQuestionComponent,
    ListQuestionsComponent,
    CreateQuestionComponent,
    EditQuestionComponent,
  ],
})
export class QuestionsModule {
}
