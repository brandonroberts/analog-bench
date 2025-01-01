
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-85',
    template: `<div class="benchmark-component">
    <h3>Component 85</h3>
    <button type="button" (click)="increment85()">
      Count {{ count85() }}
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
  export class BenchmarkNg85 {
    count85 = signal(0);

    increment85() {
      this.count85.update((count) => count + 1);
    }
  }