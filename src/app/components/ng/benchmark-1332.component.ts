
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1332',
    template: `<div class="benchmark-component">
    <h3>Component 1332</h3>
    <button type="button" (click)="increment1332()">
      Count {{ count1332() }}
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
  export class BenchmarkNg1332 {
    count1332 = signal(0);

    increment1332() {
      this.count1332.update((count) => count + 1);
    }
  }