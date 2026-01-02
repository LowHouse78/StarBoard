import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contentview } from './contentview';

describe('Contentview', () => {
  let component: Contentview;
  let fixture: ComponentFixture<Contentview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contentview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contentview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
