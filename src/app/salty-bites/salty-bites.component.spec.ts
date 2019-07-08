import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaltyBitesComponent } from './salty-bites.component';

describe('SaltyBitesComponent', () => {
  let component: SaltyBitesComponent;
  let fixture: ComponentFixture<SaltyBitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaltyBitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaltyBitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
