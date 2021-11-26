import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformePrestamoComponent } from './informe-prestamo.component';

describe('InformePrestamoComponent', () => {
  let component: InformePrestamoComponent;
  let fixture: ComponentFixture<InformePrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformePrestamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformePrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
