import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeresirvationComponent } from './listeresirvation.component';

describe('ListeresirvationComponent', () => {
  let component: ListeresirvationComponent;
  let fixture: ComponentFixture<ListeresirvationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeresirvationComponent]
    });
    fixture = TestBed.createComponent(ListeresirvationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
