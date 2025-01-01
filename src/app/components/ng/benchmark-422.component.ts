
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-422',
    template: `<div class="benchmark-component">
    <h3>Component 422</h3>
    <button type="button" (click)="increment422()">
      Count {{ count422() }}
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
  export class BenchmarkNg422 {
    count422 = signal(0);

    increment422() {
      this.count422.update((count) => count + 1);
    }
  }