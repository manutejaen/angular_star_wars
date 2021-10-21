import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsDetailPageComponent } from './elements-detail-page.component';

describe('ElementsDetailPageComponent', () => {
  let component: ElementsDetailPageComponent;
  let fixture: ComponentFixture<ElementsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
