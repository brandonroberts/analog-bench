
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-827',
    template: `<div class="benchmark-component">
    <h3>Component 827</h3>
    <button type="button" (click)="increment827()">
      Count {{ count827() }}
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
  export class BenchmarkNg827 {
    count827 = signal(0);

    increment827() {
      this.count827.update((count) => count + 1);
    }
  }