
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-179',
    template: `<div class="benchmark-component">
    <h3>Component 179</h3>
    <button type="button" (click)="increment179()">
      Count {{ count179() }}
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
  export class BenchmarkNg179 {
    count179 = signal(0);

    increment179() {
      this.count179.update((count) => count + 1);
    }
  }