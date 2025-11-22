import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HullParts } from './hull-parts';

describe('HullParts', () => {
  let component: HullParts;
  let fixture: ComponentFixture<HullParts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HullParts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HullParts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
