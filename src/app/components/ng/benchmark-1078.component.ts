
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1078',
    template: `<div class="benchmark-component">
    <h3>Component 1078</h3>
    <button type="button" (click)="increment1078()">
      Count {{ count1078() }}
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
  export class BenchmarkNg1078 {
    count1078 = signal(0);

    increment1078() {
      this.count1078.update((count) => count + 1);
    }
  }