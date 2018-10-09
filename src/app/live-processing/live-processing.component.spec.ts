import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveProcessingComponent } from './live-processing.component';

describe('LiveProcessingComponent', () => {
  let component: LiveProcessingComponent;
  let fixture: ComponentFixture<LiveProcessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveProcessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
