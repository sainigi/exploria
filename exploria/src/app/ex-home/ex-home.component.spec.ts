import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExHomeComponent } from './ex-home.component';

describe('ExHomeComponent', () => {
  let component: ExHomeComponent;
  let fixture: ComponentFixture<ExHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExHomeComponent]
    });
    fixture = TestBed.createComponent(ExHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
