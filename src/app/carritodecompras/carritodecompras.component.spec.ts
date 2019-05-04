import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritodecomprasComponent } from './carritodecompras.component';

describe('CarritodecomprasComponent', () => {
  let component: CarritodecomprasComponent;
  let fixture: ComponentFixture<CarritodecomprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritodecomprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritodecomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
