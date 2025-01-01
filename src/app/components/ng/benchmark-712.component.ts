
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-712',
    template: `<div class="benchmark-component">
    <h3>Component 712</h3>
    <button type="button" (click)="increment712()">
      Count {{ count712() }}
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
  export class BenchmarkNg712 {
    count712 = signal(0);

    increment712() {
      this.count712.update((count) => count + 1);
    }
  }