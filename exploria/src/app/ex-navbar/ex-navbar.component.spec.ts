import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExNavbarComponent } from './ex-navbar.component';

describe('ExNavbarComponent', () => {
  let component: ExNavbarComponent;
  let fixture: ComponentFixture<ExNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExNavbarComponent]
    });
    fixture = TestBed.createComponent(ExNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
