
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-277',
    template: `<div class="benchmark-component">
    <h3>Component 277</h3>
    <button type="button" (click)="increment277()">
      Count {{ count277() }}
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
  export class BenchmarkNg277 {
    count277 = signal(0);

    increment277() {
      this.count277.update((count) => count + 1);
    }
  }