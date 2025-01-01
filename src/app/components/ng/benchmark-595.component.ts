
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-595',
    template: `<div class="benchmark-component">
    <h3>Component 595</h3>
    <button type="button" (click)="increment595()">
      Count {{ count595() }}
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
  export class BenchmarkNg595 {
    count595 = signal(0);

    increment595() {
      this.count595.update((count) => count + 1);
    }
  }