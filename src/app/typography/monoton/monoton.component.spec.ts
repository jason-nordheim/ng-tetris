import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonotonComponent } from './monoton.component';

describe('MonotonComponent', () => {
  let component: MonotonComponent;
  let fixture: ComponentFixture<MonotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonotonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
