
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-783',
    template: `<div class="benchmark-component">
    <h3>Component 783</h3>
    <button type="button" (click)="increment783()">
      Count {{ count783() }}
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
  export class BenchmarkNg783 {
    count783 = signal(0);

    increment783() {
      this.count783.update((count) => count + 1);
    }
  }