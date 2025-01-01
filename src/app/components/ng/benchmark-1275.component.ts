
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1275',
    template: `<div class="benchmark-component">
    <h3>Component 1275</h3>
    <button type="button" (click)="increment1275()">
      Count {{ count1275() }}
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
  export class BenchmarkNg1275 {
    count1275 = signal(0);

    increment1275() {
      this.count1275.update((count) => count + 1);
    }
  }