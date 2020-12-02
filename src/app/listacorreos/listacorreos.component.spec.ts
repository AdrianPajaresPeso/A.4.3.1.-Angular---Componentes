import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacorreosComponent } from './listacorreos.component';

describe('ListacorreosComponent', () => {
  let component: ListacorreosComponent;
  let fixture: ComponentFixture<ListacorreosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListacorreosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacorreosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
