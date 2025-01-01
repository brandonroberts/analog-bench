
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-814',
    template: `<div class="benchmark-component">
    <h3>Component 814</h3>
    <button type="button" (click)="increment814()">
      Count {{ count814() }}
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
  export class BenchmarkNg814 {
    count814 = signal(0);

    increment814() {
      this.count814.update((count) => count + 1);
    }
  }