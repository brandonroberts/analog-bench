
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-114',
    template: `<div class="benchmark-component">
    <h3>Component 114</h3>
    <button type="button" (click)="increment114()">
      Count {{ count114() }}
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
  export class BenchmarkNg114 {
    count114 = signal(0);

    increment114() {
      this.count114.update((count) => count + 1);
    }
  }