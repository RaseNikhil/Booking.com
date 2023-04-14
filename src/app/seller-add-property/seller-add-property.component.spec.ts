import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAddPropertyComponent } from './seller-add-property.component';

describe('SellerAddPropertyComponent', () => {
  let component: SellerAddPropertyComponent;
  let fixture: ComponentFixture<SellerAddPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAddPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerAddPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
