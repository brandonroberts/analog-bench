
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1221',
    template: `<div class="benchmark-component">
    <h3>Component 1221</h3>
    <button type="button" (click)="increment1221()">
      Count {{ count1221() }}
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
  export class BenchmarkNg1221 {
    count1221 = signal(0);

    increment1221() {
      this.count1221.update((count) => count + 1);
    }
  }