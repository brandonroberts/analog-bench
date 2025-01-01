
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-851',
    template: `<div class="benchmark-component">
    <h3>Component 851</h3>
    <button type="button" (click)="increment851()">
      Count {{ count851() }}
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
  export class BenchmarkNg851 {
    count851 = signal(0);

    increment851() {
      this.count851.update((count) => count + 1);
    }
  }