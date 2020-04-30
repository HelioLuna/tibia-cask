import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaskComponent } from './cask.component';

describe('CaskComponent', () => {
  let component: CaskComponent;
  let fixture: ComponentFixture<CaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
