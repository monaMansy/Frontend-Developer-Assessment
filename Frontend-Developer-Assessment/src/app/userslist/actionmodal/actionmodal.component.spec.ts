import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionmodalComponent } from './actionmodal.component';

describe('ActionmodalComponent', () => {
  let component: ActionmodalComponent;
  let fixture: ComponentFixture<ActionmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
