
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-605',
    template: `<div class="benchmark-component">
    <h3>Component 605</h3>
    <button type="button" (click)="increment605()">
      Count {{ count605() }}
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
  export class BenchmarkNg605 {
    count605 = signal(0);

    increment605() {
      this.count605.update((count) => count + 1);
    }
  }