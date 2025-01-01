
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-899',
    template: `<div class="benchmark-component">
    <h3>Component 899</h3>
    <button type="button" (click)="increment899()">
      Count {{ count899() }}
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
  export class BenchmarkNg899 {
    count899 = signal(0);

    increment899() {
      this.count899.update((count) => count + 1);
    }
  }