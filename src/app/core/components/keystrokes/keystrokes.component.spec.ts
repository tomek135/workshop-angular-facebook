import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeystrokesComponent } from './keystrokes.component';

describe('KeystrokesComponent', () => {
  let component: KeystrokesComponent;
  let fixture: ComponentFixture<KeystrokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeystrokesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeystrokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
