import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from '../app.routes';
import { Route } from '@angular/router';
import { UserComponent } from '../user/user.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule],
      declarations: [ LoginComponent, UserComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should Be Form Invalid', () => {
    component.submitForm();
    expect(component.form.invalid).toBeTruthy();
  })
  it('Should Be Form valid', () => {
    component.form.controls.name.setValue('user');
    component.form.controls.password.setValue('user');
    component.submitForm();
    expect(component.form.valid).toBeTruthy();
  })

});
