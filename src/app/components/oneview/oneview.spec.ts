import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oneview } from './oneview';

describe('Oneview', () => {
  let component: Oneview;
  let fixture: ComponentFixture<Oneview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oneview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oneview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
