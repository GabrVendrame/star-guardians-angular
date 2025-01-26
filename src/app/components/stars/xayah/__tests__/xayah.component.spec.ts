import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XayahComponent } from './xayah.component';

describe('XayahComponent', () => {
  let component: XayahComponent;
  let fixture: ComponentFixture<XayahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XayahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XayahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
