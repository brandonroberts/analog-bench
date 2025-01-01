
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-853',
    template: `<div class="benchmark-component">
    <h3>Component 853</h3>
    <button type="button" (click)="increment853()">
      Count {{ count853() }}
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
  export class BenchmarkNg853 {
    count853 = signal(0);

    increment853() {
      this.count853.update((count) => count + 1);
    }
  }