
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-88',
    template: `<div class="benchmark-component">
    <h3>Component 88</h3>
    <button type="button" (click)="increment88()">
      Count {{ count88() }}
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
  export class BenchmarkNg88 {
    count88 = signal(0);

    increment88() {
      this.count88.update((count) => count + 1);
    }
  }