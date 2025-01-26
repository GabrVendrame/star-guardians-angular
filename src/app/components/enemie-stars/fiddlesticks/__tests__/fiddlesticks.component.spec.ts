import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiddlesticksComponent } from './fiddlesticks.component';

describe('FiddlesticksComponent', () => {
  let component: FiddlesticksComponent;
  let fixture: ComponentFixture<FiddlesticksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiddlesticksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiddlesticksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
