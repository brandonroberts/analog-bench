
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-684',
    template: `<div class="benchmark-component">
    <h3>Component 684</h3>
    <button type="button" (click)="increment684()">
      Count {{ count684() }}
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
  export class BenchmarkNg684 {
    count684 = signal(0);

    increment684() {
      this.count684.update((count) => count + 1);
    }
  }