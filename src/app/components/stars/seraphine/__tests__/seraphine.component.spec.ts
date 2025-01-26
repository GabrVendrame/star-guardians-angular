import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeraphineComponent } from './seraphine.component';

describe('SeraphineComponent', () => {
  let component: SeraphineComponent;
  let fixture: ComponentFixture<SeraphineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeraphineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeraphineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
