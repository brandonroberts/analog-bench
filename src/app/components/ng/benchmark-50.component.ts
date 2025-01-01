
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-50',
    template: `<div class="benchmark-component">
    <h3>Component 50</h3>
    <button type="button" (click)="increment50()">
      Count {{ count50() }}
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
  export class BenchmarkNg50 {
    count50 = signal(0);

    increment50() {
      this.count50.update((count) => count + 1);
    }
  }