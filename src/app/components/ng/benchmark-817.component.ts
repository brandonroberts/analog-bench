
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-817',
    template: `<div class="benchmark-component">
    <h3>Component 817</h3>
    <button type="button" (click)="increment817()">
      Count {{ count817() }}
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
  export class BenchmarkNg817 {
    count817 = signal(0);

    increment817() {
      this.count817.update((count) => count + 1);
    }
  }