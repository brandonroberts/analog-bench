
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-767',
    template: `<div class="benchmark-component">
    <h3>Component 767</h3>
    <button type="button" (click)="increment767()">
      Count {{ count767() }}
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
  export class BenchmarkNg767 {
    count767 = signal(0);

    increment767() {
      this.count767.update((count) => count + 1);
    }
  }