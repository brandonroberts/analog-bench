
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-294',
    template: `<div class="benchmark-component">
    <h3>Component 294</h3>
    <button type="button" (click)="increment294()">
      Count {{ count294() }}
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
  export class BenchmarkNg294 {
    count294 = signal(0);

    increment294() {
      this.count294.update((count) => count + 1);
    }
  }