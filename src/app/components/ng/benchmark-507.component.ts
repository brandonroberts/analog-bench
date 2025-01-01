
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-507',
    template: `<div class="benchmark-component">
    <h3>Component 507</h3>
    <button type="button" (click)="increment507()">
      Count {{ count507() }}
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
  export class BenchmarkNg507 {
    count507 = signal(0);

    increment507() {
      this.count507.update((count) => count + 1);
    }
  }