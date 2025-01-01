
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-558',
    template: `<div class="benchmark-component">
    <h3>Component 558</h3>
    <button type="button" (click)="increment558()">
      Count {{ count558() }}
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
  export class BenchmarkNg558 {
    count558 = signal(0);

    increment558() {
      this.count558.update((count) => count + 1);
    }
  }