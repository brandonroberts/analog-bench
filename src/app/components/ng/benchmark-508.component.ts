
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-508',
    template: `<div class="benchmark-component">
    <h3>Component 508</h3>
    <button type="button" (click)="increment508()">
      Count {{ count508() }}
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
  export class BenchmarkNg508 {
    count508 = signal(0);

    increment508() {
      this.count508.update((count) => count + 1);
    }
  }