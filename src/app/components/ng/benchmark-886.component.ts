
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-886',
    template: `<div class="benchmark-component">
    <h3>Component 886</h3>
    <button type="button" (click)="increment886()">
      Count {{ count886() }}
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
  export class BenchmarkNg886 {
    count886 = signal(0);

    increment886() {
      this.count886.update((count) => count + 1);
    }
  }