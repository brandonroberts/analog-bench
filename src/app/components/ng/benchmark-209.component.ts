
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-209',
    template: `<div class="benchmark-component">
    <h3>Component 209</h3>
    <button type="button" (click)="increment209()">
      Count {{ count209() }}
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
  export class BenchmarkNg209 {
    count209 = signal(0);

    increment209() {
      this.count209.update((count) => count + 1);
    }
  }