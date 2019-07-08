import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetPostComponent } from './sweet-post.component';

describe('SweetPostComponent', () => {
  let component: SweetPostComponent;
  let fixture: ComponentFixture<SweetPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
