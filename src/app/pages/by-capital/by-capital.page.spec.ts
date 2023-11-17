import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ByCapitalPage } from './by-capital.page';

describe('ByCapitalPage', () => {
  let component: ByCapitalPage;
  let fixture: ComponentFixture<ByCapitalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ByCapitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
