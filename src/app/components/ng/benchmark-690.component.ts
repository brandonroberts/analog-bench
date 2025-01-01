
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-690',
    template: `<div class="benchmark-component">
    <h3>Component 690</h3>
    <button type="button" (click)="increment690()">
      Count {{ count690() }}
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
  export class BenchmarkNg690 {
    count690 = signal(0);

    increment690() {
      this.count690.update((count) => count + 1);
    }
  }