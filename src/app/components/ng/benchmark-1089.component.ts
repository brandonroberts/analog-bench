
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1089',
    template: `<div class="benchmark-component">
    <h3>Component 1089</h3>
    <button type="button" (click)="increment1089()">
      Count {{ count1089() }}
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
  export class BenchmarkNg1089 {
    count1089 = signal(0);

    increment1089() {
      this.count1089.update((count) => count + 1);
    }
  }