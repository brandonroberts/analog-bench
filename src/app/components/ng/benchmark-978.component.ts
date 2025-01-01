
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-978',
    template: `<div class="benchmark-component">
    <h3>Component 978</h3>
    <button type="button" (click)="increment978()">
      Count {{ count978() }}
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
  export class BenchmarkNg978 {
    count978 = signal(0);

    increment978() {
      this.count978.update((count) => count + 1);
    }
  }