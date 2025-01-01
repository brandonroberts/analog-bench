
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1225',
    template: `<div class="benchmark-component">
    <h3>Component 1225</h3>
    <button type="button" (click)="increment1225()">
      Count {{ count1225() }}
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
  export class BenchmarkNg1225 {
    count1225 = signal(0);

    increment1225() {
      this.count1225.update((count) => count + 1);
    }
  }