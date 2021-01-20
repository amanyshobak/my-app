/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Page_oneComponent } from './page_one.component';

describe('Page_oneComponent', () => {
  let component: Page_oneComponent;
  let fixture: ComponentFixture<Page_oneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page_oneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page_oneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
