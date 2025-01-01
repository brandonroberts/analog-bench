
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-55',
    template: `<div class="benchmark-component">
    <h3>Component 55</h3>
    <button type="button" (click)="increment55()">
      Count {{ count55() }}
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
  export class BenchmarkNg55 {
    count55 = signal(0);

    increment55() {
      this.count55.update((count) => count + 1);
    }
  }