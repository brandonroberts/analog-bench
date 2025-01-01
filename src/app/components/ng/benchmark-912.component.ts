
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-912',
    template: `<div class="benchmark-component">
    <h3>Component 912</h3>
    <button type="button" (click)="increment912()">
      Count {{ count912() }}
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
  export class BenchmarkNg912 {
    count912 = signal(0);

    increment912() {
      this.count912.update((count) => count + 1);
    }
  }