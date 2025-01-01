
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1352',
    template: `<div class="benchmark-component">
    <h3>Component 1352</h3>
    <button type="button" (click)="increment1352()">
      Count {{ count1352() }}
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
  export class BenchmarkNg1352 {
    count1352 = signal(0);

    increment1352() {
      this.count1352.update((count) => count + 1);
    }
  }