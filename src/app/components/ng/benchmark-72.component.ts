
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-72',
    template: `<div class="benchmark-component">
    <h3>Component 72</h3>
    <button type="button" (click)="increment72()">
      Count {{ count72() }}
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
  export class BenchmarkNg72 {
    count72 = signal(0);

    increment72() {
      this.count72.update((count) => count + 1);
    }
  }