
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-521',
    template: `<div class="benchmark-component">
    <h3>Component 521</h3>
    <button type="button" (click)="increment521()">
      Count {{ count521() }}
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
  export class BenchmarkNg521 {
    count521 = signal(0);

    increment521() {
      this.count521.update((count) => count + 1);
    }
  }