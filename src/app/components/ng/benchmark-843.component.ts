
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-843',
    template: `<div class="benchmark-component">
    <h3>Component 843</h3>
    <button type="button" (click)="increment843()">
      Count {{ count843() }}
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
  export class BenchmarkNg843 {
    count843 = signal(0);

    increment843() {
      this.count843.update((count) => count + 1);
    }
  }