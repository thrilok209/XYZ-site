import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartviewingPageComponent } from './cartviewing-page.component';

describe('CartviewingPageComponent', () => {
  let component: CartviewingPageComponent;
  let fixture: ComponentFixture<CartviewingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartviewingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartviewingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
