
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-630',
    template: `<div class="benchmark-component">
    <h3>Component 630</h3>
    <button type="button" (click)="increment630()">
      Count {{ count630() }}
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
  export class BenchmarkNg630 {
    count630 = signal(0);

    increment630() {
      this.count630.update((count) => count + 1);
    }
  }