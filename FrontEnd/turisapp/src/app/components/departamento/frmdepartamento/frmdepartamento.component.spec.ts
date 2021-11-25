import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmdepartamentoComponent } from './frmdepartamento.component';

describe('FrmdepartamentoComponent', () => {
  let component: FrmdepartamentoComponent;
  let fixture: ComponentFixture<FrmdepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmdepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmdepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
