
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-425',
    template: `<div class="benchmark-component">
    <h3>Component 425</h3>
    <button type="button" (click)="increment425()">
      Count {{ count425() }}
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
  export class BenchmarkNg425 {
    count425 = signal(0);

    increment425() {
      this.count425.update((count) => count + 1);
    }
  }