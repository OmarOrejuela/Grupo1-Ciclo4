/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SitioComponent } from './sitio.component';

describe('SitioComponent', () => {
  let component: SitioComponent;
  let fixture: ComponentFixture<SitioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
