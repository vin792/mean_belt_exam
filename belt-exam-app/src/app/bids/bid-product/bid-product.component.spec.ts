import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidProductComponent } from './bid-product.component';

describe('BidProductComponent', () => {
  let component: BidProductComponent;
  let fixture: ComponentFixture<BidProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
