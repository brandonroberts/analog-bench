
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-290',
    template: `<div class="benchmark-component">
    <h3>Component 290</h3>
    <button type="button" (click)="increment290()">
      Count {{ count290() }}
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
  export class BenchmarkNg290 {
    count290 = signal(0);

    increment290() {
      this.count290.update((count) => count + 1);
    }
  }