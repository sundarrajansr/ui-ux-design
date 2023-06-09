import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  
  beforeEach(async () => {
    console.log('hello 1');
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'light-factory-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('light-factory-app');
  });

  it('application message', () =>{
    const comp = new AppComponent();
    expect(comp.message).toEqual('hello world');
    comp.clicked();
    expect(comp.message).toEqual('light clicked');
  });

});
