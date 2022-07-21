import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FeeStatementComponent } from './fee-statement.component';

describe('FeeStatementComponent', () => {
  let component: FeeStatementComponent;
  let fixture: ComponentFixture<FeeStatementComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeStatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
