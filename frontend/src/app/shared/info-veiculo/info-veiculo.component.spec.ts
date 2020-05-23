import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoVeiculoComponent } from './info-veiculo.component';

describe('InfoVeiculoComponent', () => {
  let component: InfoVeiculoComponent;
  let fixture: ComponentFixture<InfoVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
