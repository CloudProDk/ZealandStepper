import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessbasisComponent } from './accessbasis.component';

describe('AccessbasisComponent', () => {
  let component: AccessbasisComponent;
  let fixture: ComponentFixture<AccessbasisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessbasisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessbasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
