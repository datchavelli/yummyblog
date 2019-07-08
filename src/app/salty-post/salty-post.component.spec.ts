import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaltyPostComponent } from './salty-post.component';

describe('SaltyPostComponent', () => {
  let component: SaltyPostComponent;
  let fixture: ComponentFixture<SaltyPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaltyPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaltyPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
