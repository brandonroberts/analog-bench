
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-352',
    template: `<div class="benchmark-component">
    <h3>Component 352</h3>
    <button type="button" (click)="increment352()">
      Count {{ count352() }}
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
  export class BenchmarkNg352 {
    count352 = signal(0);

    increment352() {
      this.count352.update((count) => count + 1);
    }
  }