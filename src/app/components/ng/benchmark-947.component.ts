
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-947',
    template: `<div class="benchmark-component">
    <h3>Component 947</h3>
    <button type="button" (click)="increment947()">
      Count {{ count947() }}
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
  export class BenchmarkNg947 {
    count947 = signal(0);

    increment947() {
      this.count947.update((count) => count + 1);
    }
  }