import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LstsitioComponent } from './lstsitio.component';

describe('LstsitioComponent', () => {
  let component: LstsitioComponent;
  let fixture: ComponentFixture<LstsitioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LstsitioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LstsitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
