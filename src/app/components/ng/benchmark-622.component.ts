
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-622',
    template: `<div class="benchmark-component">
    <h3>Component 622</h3>
    <button type="button" (click)="increment622()">
      Count {{ count622() }}
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
  export class BenchmarkNg622 {
    count622 = signal(0);

    increment622() {
      this.count622.update((count) => count + 1);
    }
  }