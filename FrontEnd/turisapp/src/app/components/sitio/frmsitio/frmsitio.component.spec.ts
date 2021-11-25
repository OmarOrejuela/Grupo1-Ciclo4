import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmsitioComponent } from './frmsitio.component';

describe('FrmsitioComponent', () => {
  let component: FrmsitioComponent;
  let fixture: ComponentFixture<FrmsitioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmsitioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmsitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
