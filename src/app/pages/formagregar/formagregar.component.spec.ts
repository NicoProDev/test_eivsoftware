import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormagregarComponent } from './formagregar.component';

describe('FormagregarComponent', () => {
  let component: FormagregarComponent;
  let fixture: ComponentFixture<FormagregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormagregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
