import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePredictorComponent } from './mobile-predictor.component';

describe('MobilePredictorComponent', () => {
  let component: MobilePredictorComponent;
  let fixture: ComponentFixture<MobilePredictorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilePredictorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobilePredictorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
