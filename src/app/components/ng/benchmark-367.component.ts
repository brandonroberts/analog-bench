
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-367',
    template: `<div class="benchmark-component">
    <h3>Component 367</h3>
    <button type="button" (click)="increment367()">
      Count {{ count367() }}
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
  export class BenchmarkNg367 {
    count367 = signal(0);

    increment367() {
      this.count367.update((count) => count + 1);
    }
  }