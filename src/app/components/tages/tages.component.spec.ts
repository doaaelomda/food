import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagesComponent } from './tages.component';

describe('TagesComponent', () => {
  let component: TagesComponent;
  let fixture: ComponentFixture<TagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagesComponent]
    });
    fixture = TestBed.createComponent(TagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
