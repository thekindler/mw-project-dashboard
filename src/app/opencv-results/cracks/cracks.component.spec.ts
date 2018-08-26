import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CracksComponent } from './cracks.component';

describe('CracksComponent', () => {
  let component: CracksComponent;
  let fixture: ComponentFixture<CracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
