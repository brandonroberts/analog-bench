
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-545',
    template: `<div class="benchmark-component">
    <h3>Component 545</h3>
    <button type="button" (click)="increment545()">
      Count {{ count545() }}
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
  export class BenchmarkNg545 {
    count545 = signal(0);

    increment545() {
      this.count545.update((count) => count + 1);
    }
  }