import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpodashboardComponent } from './tpodashboard.component';

describe('TpodashboardComponent', () => {
  let component: TpodashboardComponent;
  let fixture: ComponentFixture<TpodashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpodashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpodashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
