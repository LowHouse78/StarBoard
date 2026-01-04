import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDataComponent } from './live-data';

describe('LiveDataComponent', () => {
  let component: LiveDataComponent;
  let fixture: ComponentFixture<LiveDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveDataComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
