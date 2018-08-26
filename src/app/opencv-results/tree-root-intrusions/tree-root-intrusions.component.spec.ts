import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeRootIntrusionsComponent } from './tree-root-intrusions.component';

describe('TreeRootIntrusionsComponent', () => {
  let component: TreeRootIntrusionsComponent;
  let fixture: ComponentFixture<TreeRootIntrusionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeRootIntrusionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeRootIntrusionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
