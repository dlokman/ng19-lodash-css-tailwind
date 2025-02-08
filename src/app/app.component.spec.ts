import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { after } from 'lodash';

// Put in beforeEach block if need to declare window property
// window.windowProperty= {value: 'window property value', configurable: true};
// Object.defineProperty(window, 'windowProperty', { value: 'window property value', configurable: true });

//jest functions
// jest.spyOn(window, 'alert');
// jest.fn()
// https://jestjs.io/docs/jest-object

// for promises
// jest.fn().mockResolvedValue('data');

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have the 'angular19-lodash-css-tailwind-test-project' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component.title).toEqual('angular19-lodash-css-tailwind-test-project');
  });

  it(`should properly initialize the component`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const spy = jest.spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

});
