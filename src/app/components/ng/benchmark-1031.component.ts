
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1031',
    template: `<div class="benchmark-component">
    <h3>Component 1031</h3>
    <button type="button" (click)="increment1031()">
      Count {{ count1031() }}
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
  export class BenchmarkNg1031 {
    count1031 = signal(0);

    increment1031() {
      this.count1031.update((count) => count + 1);
    }
  }