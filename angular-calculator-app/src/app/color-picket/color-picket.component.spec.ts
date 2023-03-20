import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPicketComponent } from './color-picket.component';

describe('ColorPicketComponent', () => {
  let component: ColorPicketComponent;
  let fixture: ComponentFixture<ColorPicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
