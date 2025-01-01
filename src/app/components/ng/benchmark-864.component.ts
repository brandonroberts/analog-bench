
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-864',
    template: `<div class="benchmark-component">
    <h3>Component 864</h3>
    <button type="button" (click)="increment864()">
      Count {{ count864() }}
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
  export class BenchmarkNg864 {
    count864 = signal(0);

    increment864() {
      this.count864.update((count) => count + 1);
    }
  }