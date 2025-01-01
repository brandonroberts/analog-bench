
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-323',
    template: `<div class="benchmark-component">
    <h3>Component 323</h3>
    <button type="button" (click)="increment323()">
      Count {{ count323() }}
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
  export class BenchmarkNg323 {
    count323 = signal(0);

    increment323() {
      this.count323.update((count) => count + 1);
    }
  }