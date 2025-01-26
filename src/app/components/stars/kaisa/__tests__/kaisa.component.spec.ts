import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaisaComponent } from './kaisa.component';

describe('KaisaComponent', () => {
  let component: KaisaComponent;
  let fixture: ComponentFixture<KaisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KaisaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KaisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
