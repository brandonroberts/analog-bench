
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-490',
    template: `<div class="benchmark-component">
    <h3>Component 490</h3>
    <button type="button" (click)="increment490()">
      Count {{ count490() }}
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
  export class BenchmarkNg490 {
    count490 = signal(0);

    increment490() {
      this.count490.update((count) => count + 1);
    }
  }