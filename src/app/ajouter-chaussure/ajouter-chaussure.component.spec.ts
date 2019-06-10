import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterChaussureComponent } from './ajouter-chaussure.component';

describe('AjouterChaussureComponent', () => {
  let component: AjouterChaussureComponent;
  let fixture: ComponentFixture<AjouterChaussureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterChaussureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterChaussureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
