
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-854',
    template: `<div class="benchmark-component">
    <h3>Component 854</h3>
    <button type="button" (click)="increment854()">
      Count {{ count854() }}
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
  export class BenchmarkNg854 {
    count854 = signal(0);

    increment854() {
      this.count854.update((count) => count + 1);
    }
  }