
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1399',
    template: `<div class="benchmark-component">
    <h3>Component 1399</h3>
    <button type="button" (click)="increment1399()">
      Count {{ count1399() }}
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
  export class BenchmarkNg1399 {
    count1399 = signal(0);

    increment1399() {
      this.count1399.update((count) => count + 1);
    }
  }