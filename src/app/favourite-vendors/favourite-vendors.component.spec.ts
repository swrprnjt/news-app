import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteVendorsComponent } from './favourite-vendors.component';

describe('FavouriteVendorsComponent', () => {
  let component: FavouriteVendorsComponent;
  let fixture: ComponentFixture<FavouriteVendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteVendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
