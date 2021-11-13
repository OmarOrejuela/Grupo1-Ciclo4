import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmpaisComponent } from './frmpais.component';

describe('FrmpaisComponent', () => {
  let component: FrmpaisComponent;
  let fixture: ComponentFixture<FrmpaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmpaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmpaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
