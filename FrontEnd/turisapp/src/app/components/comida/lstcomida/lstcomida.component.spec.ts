import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LstcomidaComponent } from './lstcomida.component';

describe('LstcomidaComponent', () => {
  let component: LstcomidaComponent;
  let fixture: ComponentFixture<LstcomidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LstcomidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LstcomidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
