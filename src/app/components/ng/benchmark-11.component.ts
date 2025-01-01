
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-11',
    template: `<div class="benchmark-component">
    <h3>Component 11</h3>
    <button type="button" (click)="increment11()">
      Count {{ count11() }}
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
  export class BenchmarkNg11 {
    count11 = signal(0);

    increment11() {
      this.count11.update((count) => count + 1);
    }
  }