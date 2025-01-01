
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-704',
    template: `<div class="benchmark-component">
    <h3>Component 704</h3>
    <button type="button" (click)="increment704()">
      Count {{ count704() }}
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
  export class BenchmarkNg704 {
    count704 = signal(0);

    increment704() {
      this.count704.update((count) => count + 1);
    }
  }