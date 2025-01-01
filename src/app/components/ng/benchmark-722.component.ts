
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-722',
    template: `<div class="benchmark-component">
    <h3>Component 722</h3>
    <button type="button" (click)="increment722()">
      Count {{ count722() }}
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
  export class BenchmarkNg722 {
    count722 = signal(0);

    increment722() {
      this.count722.update((count) => count + 1);
    }
  }