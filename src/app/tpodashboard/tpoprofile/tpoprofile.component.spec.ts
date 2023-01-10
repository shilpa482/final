import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpoprofileComponent } from './tpoprofile.component';

describe('TpoprofileComponent', () => {
  let component: TpoprofileComponent;
  let fixture: ComponentFixture<TpoprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpoprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpoprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
