import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalDataComponent } from './historical-data';

describe('HistoricalDataComponent', () => {
  let component: HistoricalDataComponent;
  let fixture: ComponentFixture<HistoricalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricalDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalDataComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
