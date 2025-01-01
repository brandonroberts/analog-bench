
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-513',
    template: `<div class="benchmark-component">
    <h3>Component 513</h3>
    <button type="button" (click)="increment513()">
      Count {{ count513() }}
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
  export class BenchmarkNg513 {
    count513 = signal(0);

    increment513() {
      this.count513.update((count) => count + 1);
    }
  }