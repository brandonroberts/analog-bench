
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-14',
    template: `<div class="benchmark-component">
    <h3>Component 14</h3>
    <button type="button" (click)="increment14()">
      Count {{ count14() }}
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
  export class BenchmarkNg14 {
    count14 = signal(0);

    increment14() {
      this.count14.update((count) => count + 1);
    }
  }