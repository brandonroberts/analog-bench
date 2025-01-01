
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-467',
    template: `<div class="benchmark-component">
    <h3>Component 467</h3>
    <button type="button" (click)="increment467()">
      Count {{ count467() }}
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
  export class BenchmarkNg467 {
    count467 = signal(0);

    increment467() {
      this.count467.update((count) => count + 1);
    }
  }