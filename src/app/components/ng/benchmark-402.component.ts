
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-402',
    template: `<div class="benchmark-component">
    <h3>Component 402</h3>
    <button type="button" (click)="increment402()">
      Count {{ count402() }}
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
  export class BenchmarkNg402 {
    count402 = signal(0);

    increment402() {
      this.count402.update((count) => count + 1);
    }
  }