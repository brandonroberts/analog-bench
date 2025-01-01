
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-879',
    template: `<div class="benchmark-component">
    <h3>Component 879</h3>
    <button type="button" (click)="increment879()">
      Count {{ count879() }}
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
  export class BenchmarkNg879 {
    count879 = signal(0);

    increment879() {
      this.count879.update((count) => count + 1);
    }
  }