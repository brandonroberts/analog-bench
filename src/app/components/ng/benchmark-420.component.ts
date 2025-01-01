
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-420',
    template: `<div class="benchmark-component">
    <h3>Component 420</h3>
    <button type="button" (click)="increment420()">
      Count {{ count420() }}
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
  export class BenchmarkNg420 {
    count420 = signal(0);

    increment420() {
      this.count420.update((count) => count + 1);
    }
  }