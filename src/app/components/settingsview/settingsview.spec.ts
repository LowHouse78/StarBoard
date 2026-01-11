import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsviewComponent } from './settingsview';

describe('SettingsviewComponent', () => {
  let component: SettingsviewComponent;
  let fixture: ComponentFixture<SettingsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsviewComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
