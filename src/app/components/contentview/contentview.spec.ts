import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentviewComponent } from './contentview';

describe('ContentviewComponent', () => {
  let component: ContentviewComponent;
  let fixture: ComponentFixture<ContentviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentviewComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
