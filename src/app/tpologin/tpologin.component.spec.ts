import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpologinComponent } from './tpologin.component';

describe('TpologinComponent', () => {
  let component: TpologinComponent;
  let fixture: ComponentFixture<TpologinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpologinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
