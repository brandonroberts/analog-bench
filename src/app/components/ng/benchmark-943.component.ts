
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-943',
    template: `<div class="benchmark-component">
    <h3>Component 943</h3>
    <button type="button" (click)="increment943()">
      Count {{ count943() }}
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
  export class BenchmarkNg943 {
    count943 = signal(0);

    increment943() {
      this.count943.update((count) => count + 1);
    }
  }