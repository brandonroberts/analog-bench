
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-517',
    template: `<div class="benchmark-component">
    <h3>Component 517</h3>
    <button type="button" (click)="increment517()">
      Count {{ count517() }}
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
  export class BenchmarkNg517 {
    count517 = signal(0);

    increment517() {
      this.count517.update((count) => count + 1);
    }
  }