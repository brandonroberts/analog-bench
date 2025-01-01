
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1188',
    template: `<div class="benchmark-component">
    <h3>Component 1188</h3>
    <button type="button" (click)="increment1188()">
      Count {{ count1188() }}
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
  export class BenchmarkNg1188 {
    count1188 = signal(0);

    increment1188() {
      this.count1188.update((count) => count + 1);
    }
  }