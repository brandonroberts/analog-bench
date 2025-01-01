
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-259',
    template: `<div class="benchmark-component">
    <h3>Component 259</h3>
    <button type="button" (click)="increment259()">
      Count {{ count259() }}
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
  export class BenchmarkNg259 {
    count259 = signal(0);

    increment259() {
      this.count259.update((count) => count + 1);
    }
  }