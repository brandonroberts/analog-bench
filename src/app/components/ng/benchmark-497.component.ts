
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-497',
    template: `<div class="benchmark-component">
    <h3>Component 497</h3>
    <button type="button" (click)="increment497()">
      Count {{ count497() }}
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
  export class BenchmarkNg497 {
    count497 = signal(0);

    increment497() {
      this.count497.update((count) => count + 1);
    }
  }