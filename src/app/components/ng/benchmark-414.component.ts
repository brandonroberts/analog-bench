
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-414',
    template: `<div class="benchmark-component">
    <h3>Component 414</h3>
    <button type="button" (click)="increment414()">
      Count {{ count414() }}
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
  export class BenchmarkNg414 {
    count414 = signal(0);

    increment414() {
      this.count414.update((count) => count + 1);
    }
  }