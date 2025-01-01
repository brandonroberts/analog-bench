
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1230',
    template: `<div class="benchmark-component">
    <h3>Component 1230</h3>
    <button type="button" (click)="increment1230()">
      Count {{ count1230() }}
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
  export class BenchmarkNg1230 {
    count1230 = signal(0);

    increment1230() {
      this.count1230.update((count) => count + 1);
    }
  }