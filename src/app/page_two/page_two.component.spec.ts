/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Page_twoComponent } from './page_two.component';

describe('Page_twoComponent', () => {
  let component: Page_twoComponent;
  let fixture: ComponentFixture<Page_twoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page_twoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page_twoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
