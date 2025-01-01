
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-792',
    template: `<div class="benchmark-component">
    <h3>Component 792</h3>
    <button type="button" (click)="increment792()">
      Count {{ count792() }}
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
  export class BenchmarkNg792 {
    count792 = signal(0);

    increment792() {
      this.count792.update((count) => count + 1);
    }
  }