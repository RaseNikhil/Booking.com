import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerUpdatePropertyComponent } from './seller-update-property.component';

describe('SellerUpdatePropertyComponent', () => {
  let component: SellerUpdatePropertyComponent;
  let fixture: ComponentFixture<SellerUpdatePropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerUpdatePropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerUpdatePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
