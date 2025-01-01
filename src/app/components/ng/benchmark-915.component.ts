
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-915',
    template: `<div class="benchmark-component">
    <h3>Component 915</h3>
    <button type="button" (click)="increment915()">
      Count {{ count915() }}
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
  export class BenchmarkNg915 {
    count915 = signal(0);

    increment915() {
      this.count915.update((count) => count + 1);
    }
  }