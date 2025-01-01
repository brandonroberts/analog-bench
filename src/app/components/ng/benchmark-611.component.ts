
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-611',
    template: `<div class="benchmark-component">
    <h3>Component 611</h3>
    <button type="button" (click)="increment611()">
      Count {{ count611() }}
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
  export class BenchmarkNg611 {
    count611 = signal(0);

    increment611() {
      this.count611.update((count) => count + 1);
    }
  }