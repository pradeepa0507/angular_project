import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRegisterComponent } from './api-register.component';

describe('ApiRegisterComponent', () => {
  let component: ApiRegisterComponent;
  let fixture: ComponentFixture<ApiRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
