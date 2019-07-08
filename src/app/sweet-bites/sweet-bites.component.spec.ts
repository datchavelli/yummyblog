import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetBitesComponent } from './sweet-bites.component';

describe('SweetBitesComponent', () => {
  let component: SweetBitesComponent;
  let fixture: ComponentFixture<SweetBitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetBitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetBitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
