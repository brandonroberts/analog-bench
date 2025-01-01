
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-137',
    template: `<div class="benchmark-component">
    <h3>Component 137</h3>
    <button type="button" (click)="increment137()">
      Count {{ count137() }}
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
  export class BenchmarkNg137 {
    count137 = signal(0);

    increment137() {
      this.count137.update((count) => count + 1);
    }
  }