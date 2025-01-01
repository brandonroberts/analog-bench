
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1008',
    template: `<div class="benchmark-component">
    <h3>Component 1008</h3>
    <button type="button" (click)="increment1008()">
      Count {{ count1008() }}
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
  export class BenchmarkNg1008 {
    count1008 = signal(0);

    increment1008() {
      this.count1008.update((count) => count + 1);
    }
  }