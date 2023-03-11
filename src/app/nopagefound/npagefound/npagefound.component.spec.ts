import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpagefoundComponent } from './npagefound.component';

describe('NpagefoundComponent', () => {
  let component: NpagefoundComponent;
  let fixture: ComponentFixture<NpagefoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpagefoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpagefoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
