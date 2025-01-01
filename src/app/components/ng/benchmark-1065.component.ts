
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1065',
    template: `<div class="benchmark-component">
    <h3>Component 1065</h3>
    <button type="button" (click)="increment1065()">
      Count {{ count1065() }}
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
  export class BenchmarkNg1065 {
    count1065 = signal(0);

    increment1065() {
      this.count1065.update((count) => count + 1);
    }
  }