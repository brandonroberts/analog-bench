
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-948',
    template: `<div class="benchmark-component">
    <h3>Component 948</h3>
    <button type="button" (click)="increment948()">
      Count {{ count948() }}
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
  export class BenchmarkNg948 {
    count948 = signal(0);

    increment948() {
      this.count948.update((count) => count + 1);
    }
  }