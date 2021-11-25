import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmcomidaComponent } from './frmcomida.component';

describe('FrmcomidaComponent', () => {
  let component: FrmcomidaComponent;
  let fixture: ComponentFixture<FrmcomidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmcomidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmcomidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
