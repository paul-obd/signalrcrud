import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddstudentComponent } from './dialog-addstudent.component';

describe('DialogAddstudentComponent', () => {
  let component: DialogAddstudentComponent;
  let fixture: ComponentFixture<DialogAddstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
