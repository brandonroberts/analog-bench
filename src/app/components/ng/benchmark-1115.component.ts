
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1115',
    template: `<div class="benchmark-component">
    <h3>Component 1115</h3>
    <button type="button" (click)="increment1115()">
      Count {{ count1115() }}
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
  export class BenchmarkNg1115 {
    count1115 = signal(0);

    increment1115() {
      this.count1115.update((count) => count + 1);
    }
  }