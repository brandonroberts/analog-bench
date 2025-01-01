
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-973',
    template: `<div class="benchmark-component">
    <h3>Component 973</h3>
    <button type="button" (click)="increment973()">
      Count {{ count973() }}
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
  export class BenchmarkNg973 {
    count973 = signal(0);

    increment973() {
      this.count973.update((count) => count + 1);
    }
  }