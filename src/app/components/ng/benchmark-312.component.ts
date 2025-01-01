
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-312',
    template: `<div class="benchmark-component">
    <h3>Component 312</h3>
    <button type="button" (click)="increment312()">
      Count {{ count312() }}
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
  export class BenchmarkNg312 {
    count312 = signal(0);

    increment312() {
      this.count312.update((count) => count + 1);
    }
  }