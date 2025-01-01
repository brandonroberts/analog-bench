
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-833',
    template: `<div class="benchmark-component">
    <h3>Component 833</h3>
    <button type="button" (click)="increment833()">
      Count {{ count833() }}
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
  export class BenchmarkNg833 {
    count833 = signal(0);

    increment833() {
      this.count833.update((count) => count + 1);
    }
  }