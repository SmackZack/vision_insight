import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatavalidateComponent } from './datavalidate.component';

describe('DatavalidateComponent', () => {
  let component: DatavalidateComponent;
  let fixture: ComponentFixture<DatavalidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatavalidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatavalidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
