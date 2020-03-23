import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalchoiceComponent } from './educationalchoice.component';

describe('EducationalchoiceComponent', () => {
  let component: EducationalchoiceComponent;
  let fixture: ComponentFixture<EducationalchoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationalchoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationalchoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
