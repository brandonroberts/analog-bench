
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-79',
    template: `<div class="benchmark-component">
    <h3>Component 79</h3>
    <button type="button" (click)="increment79()">
      Count {{ count79() }}
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
  export class BenchmarkNg79 {
    count79 = signal(0);

    increment79() {
      this.count79.update((count) => count + 1);
    }
  }