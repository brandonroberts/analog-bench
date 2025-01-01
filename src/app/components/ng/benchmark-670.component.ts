
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-670',
    template: `<div class="benchmark-component">
    <h3>Component 670</h3>
    <button type="button" (click)="increment670()">
      Count {{ count670() }}
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
  export class BenchmarkNg670 {
    count670 = signal(0);

    increment670() {
      this.count670.update((count) => count + 1);
    }
  }