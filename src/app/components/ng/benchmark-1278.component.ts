
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1278',
    template: `<div class="benchmark-component">
    <h3>Component 1278</h3>
    <button type="button" (click)="increment1278()">
      Count {{ count1278() }}
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
  export class BenchmarkNg1278 {
    count1278 = signal(0);

    increment1278() {
      this.count1278.update((count) => count + 1);
    }
  }