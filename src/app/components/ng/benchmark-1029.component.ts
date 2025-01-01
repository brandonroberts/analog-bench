
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1029',
    template: `<div class="benchmark-component">
    <h3>Component 1029</h3>
    <button type="button" (click)="increment1029()">
      Count {{ count1029() }}
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
  export class BenchmarkNg1029 {
    count1029 = signal(0);

    increment1029() {
      this.count1029.update((count) => count + 1);
    }
  }