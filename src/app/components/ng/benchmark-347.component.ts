
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-347',
    template: `<div class="benchmark-component">
    <h3>Component 347</h3>
    <button type="button" (click)="increment347()">
      Count {{ count347() }}
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
  export class BenchmarkNg347 {
    count347 = signal(0);

    increment347() {
      this.count347.update((count) => count + 1);
    }
  }