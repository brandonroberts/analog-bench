
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-301',
    template: `<div class="benchmark-component">
    <h3>Component 301</h3>
    <button type="button" (click)="increment301()">
      Count {{ count301() }}
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
  export class BenchmarkNg301 {
    count301 = signal(0);

    increment301() {
      this.count301.update((count) => count + 1);
    }
  }