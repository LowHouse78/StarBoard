import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menuebutton } from './menuebutton';

describe('Menuebutton', () => {
  let component: Menuebutton;
  let fixture: ComponentFixture<Menuebutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menuebutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menuebutton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
