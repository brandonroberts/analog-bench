
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1320',
    template: `<div class="benchmark-component">
    <h3>Component 1320</h3>
    <button type="button" (click)="increment1320()">
      Count {{ count1320() }}
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
  export class BenchmarkNg1320 {
    count1320 = signal(0);

    increment1320() {
      this.count1320.update((count) => count + 1);
    }
  }