
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1123',
    template: `<div class="benchmark-component">
    <h3>Component 1123</h3>
    <button type="button" (click)="increment1123()">
      Count {{ count1123() }}
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
  export class BenchmarkNg1123 {
    count1123 = signal(0);

    increment1123() {
      this.count1123.update((count) => count + 1);
    }
  }