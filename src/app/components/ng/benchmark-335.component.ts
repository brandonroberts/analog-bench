
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-335',
    template: `<div class="benchmark-component">
    <h3>Component 335</h3>
    <button type="button" (click)="increment335()">
      Count {{ count335() }}
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
  export class BenchmarkNg335 {
    count335 = signal(0);

    increment335() {
      this.count335.update((count) => count + 1);
    }
  }