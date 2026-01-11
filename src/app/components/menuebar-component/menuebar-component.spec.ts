import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuebarComponentComponent } from './menuebar-component';

describe('MenuebarComponentComponent', () => {
  let component: MenuebarComponentComponent;
  let fixture: ComponentFixture<MenuebarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuebarComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuebarComponentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
