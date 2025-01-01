
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1177',
    template: `<div class="benchmark-component">
    <h3>Component 1177</h3>
    <button type="button" (click)="increment1177()">
      Count {{ count1177() }}
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
  export class BenchmarkNg1177 {
    count1177 = signal(0);

    increment1177() {
      this.count1177.update((count) => count + 1);
    }
  }