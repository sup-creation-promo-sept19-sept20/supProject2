import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsQuestionComponent } from './details-question.component';

describe('DetailsQuestionComponent', () => {
  let component: DetailsQuestionComponent;
  let fixture: ComponentFixture<DetailsQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
