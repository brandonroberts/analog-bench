
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-456',
    template: `<div class="benchmark-component">
    <h3>Component 456</h3>
    <button type="button" (click)="increment456()">
      Count {{ count456() }}
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
  export class BenchmarkNg456 {
    count456 = signal(0);

    increment456() {
      this.count456.update((count) => count + 1);
    }
  }