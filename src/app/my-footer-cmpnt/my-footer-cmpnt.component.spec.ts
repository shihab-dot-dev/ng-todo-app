import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFooterCmpntComponent } from './my-footer-cmpnt.component';

describe('MyFooterCmpntComponent', () => {
  let component: MyFooterCmpntComponent;
  let fixture: ComponentFixture<MyFooterCmpntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFooterCmpntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFooterCmpntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
