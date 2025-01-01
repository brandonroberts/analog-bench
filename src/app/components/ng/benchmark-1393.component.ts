
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1393',
    template: `<div class="benchmark-component">
    <h3>Component 1393</h3>
    <button type="button" (click)="increment1393()">
      Count {{ count1393() }}
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
  export class BenchmarkNg1393 {
    count1393 = signal(0);

    increment1393() {
      this.count1393.update((count) => count + 1);
    }
  }