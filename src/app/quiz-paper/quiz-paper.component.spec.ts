import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPaperComponent } from './quiz-paper.component';

describe('QuizPaperComponent', () => {
  let component: QuizPaperComponent;
  let fixture: ComponentFixture<QuizPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
