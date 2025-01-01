
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-999',
    template: `<div class="benchmark-component">
    <h3>Component 999</h3>
    <button type="button" (click)="increment999()">
      Count {{ count999() }}
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
  export class BenchmarkNg999 {
    count999 = signal(0);

    increment999() {
      this.count999.update((count) => count + 1);
    }
  }