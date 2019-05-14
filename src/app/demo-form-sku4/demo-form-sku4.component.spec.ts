import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormSku4Component } from './demo-form-sku4.component';

describe('DemoFormSku4Component', () => {
  let component: DemoFormSku4Component;
  let fixture: ComponentFixture<DemoFormSku4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormSku4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormSku4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
