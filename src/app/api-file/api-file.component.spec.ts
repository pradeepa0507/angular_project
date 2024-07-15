import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFileComponent } from './api-file.component';

describe('ApiFileComponent', () => {
  let component: ApiFileComponent;
  let fixture: ComponentFixture<ApiFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
