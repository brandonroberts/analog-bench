
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-907',
    template: `<div class="benchmark-component">
    <h3>Component 907</h3>
    <button type="button" (click)="increment907()">
      Count {{ count907() }}
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
  export class BenchmarkNg907 {
    count907 = signal(0);

    increment907() {
      this.count907.update((count) => count + 1);
    }
  }