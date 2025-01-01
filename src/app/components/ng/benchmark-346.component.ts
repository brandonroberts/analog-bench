
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-346',
    template: `<div class="benchmark-component">
    <h3>Component 346</h3>
    <button type="button" (click)="increment346()">
      Count {{ count346() }}
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
  export class BenchmarkNg346 {
    count346 = signal(0);

    increment346() {
      this.count346.update((count) => count + 1);
    }
  }