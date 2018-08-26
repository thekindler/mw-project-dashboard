import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpencvResultsComponent } from './opencv-results.component';

describe('OpencvResultsComponent', () => {
  let component: OpencvResultsComponent;
  let fixture: ComponentFixture<OpencvResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpencvResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpencvResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
