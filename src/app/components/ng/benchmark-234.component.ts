
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-234',
    template: `<div class="benchmark-component">
    <h3>Component 234</h3>
    <button type="button" (click)="increment234()">
      Count {{ count234() }}
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
  export class BenchmarkNg234 {
    count234 = signal(0);

    increment234() {
      this.count234.update((count) => count + 1);
    }
  }