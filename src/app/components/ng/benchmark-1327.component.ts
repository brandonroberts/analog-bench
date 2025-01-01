
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1327',
    template: `<div class="benchmark-component">
    <h3>Component 1327</h3>
    <button type="button" (click)="increment1327()">
      Count {{ count1327() }}
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
  export class BenchmarkNg1327 {
    count1327 = signal(0);

    increment1327() {
      this.count1327.update((count) => count + 1);
    }
  }