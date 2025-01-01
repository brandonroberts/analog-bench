
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1263',
    template: `<div class="benchmark-component">
    <h3>Component 1263</h3>
    <button type="button" (click)="increment1263()">
      Count {{ count1263() }}
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
  export class BenchmarkNg1263 {
    count1263 = signal(0);

    increment1263() {
      this.count1263.update((count) => count + 1);
    }
  }