import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioSettingComponent } from './radio-setting.component';

describe('RadioSettingComponent', () => {
  let component: RadioSettingComponent;
  let fixture: ComponentFixture<RadioSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
