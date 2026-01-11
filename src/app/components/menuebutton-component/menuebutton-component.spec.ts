import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuebuttonComponentComponent } from './menuebutton-component';

describe('MenuebuttonComponentComponent', () => {
  let component: MenuebuttonComponentComponent;
  let fixture: ComponentFixture<MenuebuttonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuebuttonComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuebuttonComponentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
