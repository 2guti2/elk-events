import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMessagesComponent } from './create-messages.component';

describe('CreateMessagesComponent', () => {
  let component: CreateMessagesComponent;
  let fixture: ComponentFixture<CreateMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
