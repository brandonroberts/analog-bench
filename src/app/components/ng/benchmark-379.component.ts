
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-379',
    template: `<div class="benchmark-component">
    <h3>Component 379</h3>
    <button type="button" (click)="increment379()">
      Count {{ count379() }}
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
  export class BenchmarkNg379 {
    count379 = signal(0);

    increment379() {
      this.count379.update((count) => count + 1);
    }
  }