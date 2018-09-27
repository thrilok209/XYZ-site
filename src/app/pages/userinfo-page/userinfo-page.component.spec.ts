import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoPageComponent } from './userinfo-page.component';

describe('UserinfoPageComponent', () => {
  let component: UserinfoPageComponent;
  let fixture: ComponentFixture<UserinfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserinfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
