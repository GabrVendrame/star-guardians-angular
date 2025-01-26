import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriannaComponent } from './orianna.component';

describe('OriannaComponent', () => {
  let component: OriannaComponent;
  let fixture: ComponentFixture<OriannaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OriannaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OriannaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
