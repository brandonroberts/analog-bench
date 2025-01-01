
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-800',
    template: `<div class="benchmark-component">
    <h3>Component 800</h3>
    <button type="button" (click)="increment800()">
      Count {{ count800() }}
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
  export class BenchmarkNg800 {
    count800 = signal(0);

    increment800() {
      this.count800.update((count) => count + 1);
    }
  }