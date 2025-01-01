
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-922',
    template: `<div class="benchmark-component">
    <h3>Component 922</h3>
    <button type="button" (click)="increment922()">
      Count {{ count922() }}
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
  export class BenchmarkNg922 {
    count922 = signal(0);

    increment922() {
      this.count922.update((count) => count + 1);
    }
  }