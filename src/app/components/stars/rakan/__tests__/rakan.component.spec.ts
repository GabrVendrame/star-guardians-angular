import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RakanComponent } from './rakan.component';

describe('RakanComponent', () => {
  let component: RakanComponent;
  let fixture: ComponentFixture<RakanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RakanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
