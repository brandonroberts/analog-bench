
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-988',
    template: `<div class="benchmark-component">
    <h3>Component 988</h3>
    <button type="button" (click)="increment988()">
      Count {{ count988() }}
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
  export class BenchmarkNg988 {
    count988 = signal(0);

    increment988() {
      this.count988.update((count) => count + 1);
    }
  }