
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-276',
    template: `<div class="benchmark-component">
    <h3>Component 276</h3>
    <button type="button" (click)="increment276()">
      Count {{ count276() }}
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
  export class BenchmarkNg276 {
    count276 = signal(0);

    increment276() {
      this.count276.update((count) => count + 1);
    }
  }