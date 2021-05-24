import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CulturasRecomendadasPage } from './culturas-recomendadas.page';

describe('CulturasRecomendadasPage', () => {
  let component: CulturasRecomendadasPage;
  let fixture: ComponentFixture<CulturasRecomendadasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturasRecomendadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CulturasRecomendadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
