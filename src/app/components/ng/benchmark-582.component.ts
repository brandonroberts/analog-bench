
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-582',
    template: `<div class="benchmark-component">
    <h3>Component 582</h3>
    <button type="button" (click)="increment582()">
      Count {{ count582() }}
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
  export class BenchmarkNg582 {
    count582 = signal(0);

    increment582() {
      this.count582.update((count) => count + 1);
    }
  }