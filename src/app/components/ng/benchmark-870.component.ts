
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-870',
    template: `<div class="benchmark-component">
    <h3>Component 870</h3>
    <button type="button" (click)="increment870()">
      Count {{ count870() }}
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
  export class BenchmarkNg870 {
    count870 = signal(0);

    increment870() {
      this.count870.update((count) => count + 1);
    }
  }