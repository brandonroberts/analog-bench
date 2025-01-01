
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-555',
    template: `<div class="benchmark-component">
    <h3>Component 555</h3>
    <button type="button" (click)="increment555()">
      Count {{ count555() }}
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
  export class BenchmarkNg555 {
    count555 = signal(0);

    increment555() {
      this.count555.update((count) => count + 1);
    }
  }