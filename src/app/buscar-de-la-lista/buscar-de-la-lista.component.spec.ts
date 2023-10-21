import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDeLaListaComponent } from './buscar-de-la-lista.component';

describe('BuscarDeLaListaComponent', () => {
  let component: BuscarDeLaListaComponent;
  let fixture: ComponentFixture<BuscarDeLaListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarDeLaListaComponent]
    });
    fixture = TestBed.createComponent(BuscarDeLaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
