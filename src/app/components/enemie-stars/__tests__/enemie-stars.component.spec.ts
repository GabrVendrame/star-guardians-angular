import { ComponentFixture, TestBed } from "@angular/core/testing";
import { EnemieStarsComponent } from "../enemie-stars.component";

describe("EnemieStarsComponent", () => {
  let component: EnemieStarsComponent;
  let fixture: ComponentFixture<EnemieStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnemieStarsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EnemieStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
