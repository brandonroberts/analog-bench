
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1137',
    template: `<div class="benchmark-component">
    <h3>Component 1137</h3>
    <button type="button" (click)="increment1137()">
      Count {{ count1137() }}
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
  export class BenchmarkNg1137 {
    count1137 = signal(0);

    increment1137() {
      this.count1137.update((count) => count + 1);
    }
  }