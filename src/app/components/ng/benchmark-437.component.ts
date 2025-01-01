
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-437',
    template: `<div class="benchmark-component">
    <h3>Component 437</h3>
    <button type="button" (click)="increment437()">
      Count {{ count437() }}
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
  export class BenchmarkNg437 {
    count437 = signal(0);

    increment437() {
      this.count437.update((count) => count + 1);
    }
  }