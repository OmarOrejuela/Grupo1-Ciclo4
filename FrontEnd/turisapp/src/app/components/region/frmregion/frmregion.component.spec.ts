import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmregionComponent } from './frmregion.component';

describe('FrmregionComponent', () => {
  let component: FrmregionComponent;
  let fixture: ComponentFixture<FrmregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmregionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
