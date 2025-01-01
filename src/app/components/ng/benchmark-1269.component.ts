
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1269',
    template: `<div class="benchmark-component">
    <h3>Component 1269</h3>
    <button type="button" (click)="increment1269()">
      Count {{ count1269() }}
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
  export class BenchmarkNg1269 {
    count1269 = signal(0);

    increment1269() {
      this.count1269.update((count) => count + 1);
    }
  }