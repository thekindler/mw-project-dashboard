import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PACPPageComponent } from './pacppage.component';

describe('PACPPageComponent', () => {
  let component: PACPPageComponent;
  let fixture: ComponentFixture<PACPPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PACPPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PACPPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
