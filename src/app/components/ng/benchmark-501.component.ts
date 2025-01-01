
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-501',
    template: `<div class="benchmark-component">
    <h3>Component 501</h3>
    <button type="button" (click)="increment501()">
      Count {{ count501() }}
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
  export class BenchmarkNg501 {
    count501 = signal(0);

    increment501() {
      this.count501.update((count) => count + 1);
    }
  }