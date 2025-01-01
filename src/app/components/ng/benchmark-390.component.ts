
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-390',
    template: `<div class="benchmark-component">
    <h3>Component 390</h3>
    <button type="button" (click)="increment390()">
      Count {{ count390() }}
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
  export class BenchmarkNg390 {
    count390 = signal(0);

    increment390() {
      this.count390.update((count) => count + 1);
    }
  }