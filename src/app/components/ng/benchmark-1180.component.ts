
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1180',
    template: `<div class="benchmark-component">
    <h3>Component 1180</h3>
    <button type="button" (click)="increment1180()">
      Count {{ count1180() }}
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
  export class BenchmarkNg1180 {
    count1180 = signal(0);

    increment1180() {
      this.count1180.update((count) => count + 1);
    }
  }