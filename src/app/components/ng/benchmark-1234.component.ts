
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1234',
    template: `<div class="benchmark-component">
    <h3>Component 1234</h3>
    <button type="button" (click)="increment1234()">
      Count {{ count1234() }}
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
  export class BenchmarkNg1234 {
    count1234 = signal(0);

    increment1234() {
      this.count1234.update((count) => count + 1);
    }
  }