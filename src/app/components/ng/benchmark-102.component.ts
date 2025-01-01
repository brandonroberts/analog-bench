
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-102',
    template: `<div class="benchmark-component">
    <h3>Component 102</h3>
    <button type="button" (click)="increment102()">
      Count {{ count102() }}
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
  export class BenchmarkNg102 {
    count102 = signal(0);

    increment102() {
      this.count102.update((count) => count + 1);
    }
  }