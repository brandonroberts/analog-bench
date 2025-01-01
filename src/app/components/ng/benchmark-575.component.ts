
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-575',
    template: `<div class="benchmark-component">
    <h3>Component 575</h3>
    <button type="button" (click)="increment575()">
      Count {{ count575() }}
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
  export class BenchmarkNg575 {
    count575 = signal(0);

    increment575() {
      this.count575.update((count) => count + 1);
    }
  }