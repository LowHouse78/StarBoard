import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuebuttonComponent } from './menuebutton';

describe('MenuebuttonComponent', () => {
  let component: MenuebuttonComponent;
  let fixture: ComponentFixture<MenuebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuebuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuebuttonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
