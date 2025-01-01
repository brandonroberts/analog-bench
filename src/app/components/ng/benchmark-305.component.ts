
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-305',
    template: `<div class="benchmark-component">
    <h3>Component 305</h3>
    <button type="button" (click)="increment305()">
      Count {{ count305() }}
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
  export class BenchmarkNg305 {
    count305 = signal(0);

    increment305() {
      this.count305.update((count) => count + 1);
    }
  }