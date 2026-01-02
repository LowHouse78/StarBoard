import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menuebar } from './menuebar';

describe('Menuebar', () => {
  let component: Menuebar;
  let fixture: ComponentFixture<Menuebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menuebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menuebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
