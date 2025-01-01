
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-245',
    template: `<div class="benchmark-component">
    <h3>Component 245</h3>
    <button type="button" (click)="increment245()">
      Count {{ count245() }}
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
  export class BenchmarkNg245 {
    count245 = signal(0);

    increment245() {
      this.count245.update((count) => count + 1);
    }
  }