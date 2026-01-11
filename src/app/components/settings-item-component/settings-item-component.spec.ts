import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsItemComponentComponent } from './settings-item-component';

describe('SettingsItemComponentComponent', () => {
  let component: SettingsItemComponentComponent;
  let fixture: ComponentFixture<SettingsItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsItemComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsItemComponentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
