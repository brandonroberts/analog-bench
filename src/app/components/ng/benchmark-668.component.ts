
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-668',
    template: `<div class="benchmark-component">
    <h3>Component 668</h3>
    <button type="button" (click)="increment668()">
      Count {{ count668() }}
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
  export class BenchmarkNg668 {
    count668 = signal(0);

    increment668() {
      this.count668.update((count) => count + 1);
    }
  }