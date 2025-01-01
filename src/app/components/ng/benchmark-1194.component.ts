
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1194',
    template: `<div class="benchmark-component">
    <h3>Component 1194</h3>
    <button type="button" (click)="increment1194()">
      Count {{ count1194() }}
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
  export class BenchmarkNg1194 {
    count1194 = signal(0);

    increment1194() {
      this.count1194.update((count) => count + 1);
    }
  }