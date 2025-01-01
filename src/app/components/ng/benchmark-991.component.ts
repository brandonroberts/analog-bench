
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-991',
    template: `<div class="benchmark-component">
    <h3>Component 991</h3>
    <button type="button" (click)="increment991()">
      Count {{ count991() }}
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
  export class BenchmarkNg991 {
    count991 = signal(0);

    increment991() {
      this.count991.update((count) => count + 1);
    }
  }