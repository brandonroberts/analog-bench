
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1304',
    template: `<div class="benchmark-component">
    <h3>Component 1304</h3>
    <button type="button" (click)="increment1304()">
      Count {{ count1304() }}
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
  export class BenchmarkNg1304 {
    count1304 = signal(0);

    increment1304() {
      this.count1304.update((count) => count + 1);
    }
  }