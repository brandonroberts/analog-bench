
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-214',
    template: `<div class="benchmark-component">
    <h3>Component 214</h3>
    <button type="button" (click)="increment214()">
      Count {{ count214() }}
    </button>
  </div>`,
  styles: `
  .benchmark-component {
    padding: 1rem;
    border: 1px solid #ccc;
    margin: 0.5rem;
    border-radius: 4px;
  }
  `,
    standalone: true,
  })
  export class BenchmarkNg214 {
    count214 = signal(0);

    increment214() {
      this.count214.update((count) => count + 1);
    }
  }