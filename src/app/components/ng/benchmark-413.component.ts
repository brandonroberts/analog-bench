
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-413',
    template: `<div class="benchmark-component">
    <h3>Component 413</h3>
    <button type="button" (click)="increment413()">
      Count {{ count413() }}
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
  export class BenchmarkNg413 {
    count413 = signal(0);

    increment413() {
      this.count413.update((count) => count + 1);
    }
  }