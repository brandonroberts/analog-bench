
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-734',
    template: `<div class="benchmark-component">
    <h3>Component 734</h3>
    <button type="button" (click)="increment734()">
      Count {{ count734() }}
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
  export class BenchmarkNg734 {
    count734 = signal(0);

    increment734() {
      this.count734.update((count) => count + 1);
    }
  }