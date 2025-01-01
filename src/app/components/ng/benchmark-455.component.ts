
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-455',
    template: `<div class="benchmark-component">
    <h3>Component 455</h3>
    <button type="button" (click)="increment455()">
      Count {{ count455() }}
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
  export class BenchmarkNg455 {
    count455 = signal(0);

    increment455() {
      this.count455.update((count) => count + 1);
    }
  }