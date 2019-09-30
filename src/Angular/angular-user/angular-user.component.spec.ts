import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularUserComponent } from './angular-user.component';

describe('AngularUserComponent', () => {
  let component: AngularUserComponent;
  let fixture: ComponentFixture<AngularUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
