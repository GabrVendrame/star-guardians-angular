import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkaliComponent } from '../akali.component';

describe('AkaliComponent', () => {
  let component: AkaliComponent;
  let fixture: ComponentFixture<AkaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AkaliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
