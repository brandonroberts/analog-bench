
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1216',
    template: `<div class="benchmark-component">
    <h3>Component 1216</h3>
    <button type="button" (click)="increment1216()">
      Count {{ count1216() }}
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
  export class BenchmarkNg1216 {
    count1216 = signal(0);

    increment1216() {
      this.count1216.update((count) => count + 1);
    }
  }