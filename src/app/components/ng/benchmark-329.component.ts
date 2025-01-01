
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-329',
    template: `<div class="benchmark-component">
    <h3>Component 329</h3>
    <button type="button" (click)="increment329()">
      Count {{ count329() }}
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
  export class BenchmarkNg329 {
    count329 = signal(0);

    increment329() {
      this.count329.update((count) => count + 1);
    }
  }