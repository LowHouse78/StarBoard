import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalDataViewComponent } from './historical-data-view';

describe('HistoricalDataViewComponent', () => {
  let component: HistoricalDataViewComponent;
  let fixture: ComponentFixture<HistoricalDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricalDataViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalDataViewComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
