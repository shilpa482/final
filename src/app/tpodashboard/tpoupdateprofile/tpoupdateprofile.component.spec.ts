import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpoupdateprofileComponent } from './tpoupdateprofile.component';

describe('TpoupdateprofileComponent', () => {
  let component: TpoupdateprofileComponent;
  let fixture: ComponentFixture<TpoupdateprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpoupdateprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpoupdateprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
