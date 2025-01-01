
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-836',
    template: `<div class="benchmark-component">
    <h3>Component 836</h3>
    <button type="button" (click)="increment836()">
      Count {{ count836() }}
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
  export class BenchmarkNg836 {
    count836 = signal(0);

    increment836() {
      this.count836.update((count) => count + 1);
    }
  }