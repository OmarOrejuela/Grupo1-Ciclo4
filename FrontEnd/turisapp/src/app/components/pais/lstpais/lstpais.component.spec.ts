import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LstpaisComponent } from './lstpais.component';

describe('LstpaisComponent', () => {
  let component: LstpaisComponent;
  let fixture: ComponentFixture<LstpaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LstpaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LstpaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
