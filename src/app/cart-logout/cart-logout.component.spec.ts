import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartLogoutComponent } from './cart-logout.component';

describe('CartLogoutComponent', () => {
  let component: CartLogoutComponent;
  let fixture: ComponentFixture<CartLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
