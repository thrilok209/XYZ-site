import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductviewingPageComponent } from './productviewing-page.component';

describe('ProductviewingPageComponent', () => {
  let component: ProductviewingPageComponent;
  let fixture: ComponentFixture<ProductviewingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductviewingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductviewingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
