import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sails } from './sails';

describe('Sails', () => {
  let component: Sails;
  let fixture: ComponentFixture<Sails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
