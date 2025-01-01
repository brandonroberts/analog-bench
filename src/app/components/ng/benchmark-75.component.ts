
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-75',
    template: `<div class="benchmark-component">
    <h3>Component 75</h3>
    <button type="button" (click)="increment75()">
      Count {{ count75() }}
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
  export class BenchmarkNg75 {
    count75 = signal(0);

    increment75() {
      this.count75.update((count) => count + 1);
    }
  }