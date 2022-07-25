import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatChildComponent } from './mat-child.component';

describe('MatChildComponent', () => {
  let component: MatChildComponent;
  let fixture: ComponentFixture<MatChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
