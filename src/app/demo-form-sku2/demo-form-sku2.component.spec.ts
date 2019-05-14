import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormSku2Component } from './demo-form-sku2.component';

describe('DemoFormSku2Component', () => {
  let component: DemoFormSku2Component;
  let fixture: ComponentFixture<DemoFormSku2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormSku2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormSku2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
