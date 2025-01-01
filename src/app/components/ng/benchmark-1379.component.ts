
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1379',
    template: `<div class="benchmark-component">
    <h3>Component 1379</h3>
    <button type="button" (click)="increment1379()">
      Count {{ count1379() }}
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
  export class BenchmarkNg1379 {
    count1379 = signal(0);

    increment1379() {
      this.count1379.update((count) => count + 1);
    }
  }