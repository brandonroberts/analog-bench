
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-129',
    template: `<div class="benchmark-component">
    <h3>Component 129</h3>
    <button type="button" (click)="increment129()">
      Count {{ count129() }}
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
  export class BenchmarkNg129 {
    count129 = signal(0);

    increment129() {
      this.count129.update((count) => count + 1);
    }
  }