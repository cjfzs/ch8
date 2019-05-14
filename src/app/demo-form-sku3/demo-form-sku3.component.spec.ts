import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormSku3Component } from './demo-form-sku3.component';

describe('DemoFormSku3Component', () => {
  let component: DemoFormSku3Component;
  let fixture: ComponentFixture<DemoFormSku3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormSku3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormSku3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
