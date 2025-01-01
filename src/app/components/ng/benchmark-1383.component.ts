
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1383',
    template: `<div class="benchmark-component">
    <h3>Component 1383</h3>
    <button type="button" (click)="increment1383()">
      Count {{ count1383() }}
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
  export class BenchmarkNg1383 {
    count1383 = signal(0);

    increment1383() {
      this.count1383.update((count) => count + 1);
    }
  }