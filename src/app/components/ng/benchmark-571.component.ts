
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-571',
    template: `<div class="benchmark-component">
    <h3>Component 571</h3>
    <button type="button" (click)="increment571()">
      Count {{ count571() }}
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
  export class BenchmarkNg571 {
    count571 = signal(0);

    increment571() {
      this.count571.update((count) => count + 1);
    }
  }