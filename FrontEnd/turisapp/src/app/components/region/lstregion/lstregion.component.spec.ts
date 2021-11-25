import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LstregionComponent } from './lstregion.component';

describe('LstregionComponent', () => {
  let component: LstregionComponent;
  let fixture: ComponentFixture<LstregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LstregionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LstregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
