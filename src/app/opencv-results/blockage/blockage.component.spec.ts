import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockageComponent } from './blockage.component';

describe('BlockageComponent', () => {
  let component: BlockageComponent;
  let fixture: ComponentFixture<BlockageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
