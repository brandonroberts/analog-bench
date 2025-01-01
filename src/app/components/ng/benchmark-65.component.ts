
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-65',
    template: `<div class="benchmark-component">
    <h3>Component 65</h3>
    <button type="button" (click)="increment65()">
      Count {{ count65() }}
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
  export class BenchmarkNg65 {
    count65 = signal(0);

    increment65() {
      this.count65.update((count) => count + 1);
    }
  }