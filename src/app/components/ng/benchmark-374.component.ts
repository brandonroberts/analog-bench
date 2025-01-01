
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-374',
    template: `<div class="benchmark-component">
    <h3>Component 374</h3>
    <button type="button" (click)="increment374()">
      Count {{ count374() }}
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
  export class BenchmarkNg374 {
    count374 = signal(0);

    increment374() {
      this.count374.update((count) => count + 1);
    }
  }