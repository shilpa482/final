import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TporegisterComponent } from './tporegister.component';

describe('TporegisterComponent', () => {
  let component: TporegisterComponent;
  let fixture: ComponentFixture<TporegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TporegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TporegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
