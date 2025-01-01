
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-99',
    template: `<div class="benchmark-component">
    <h3>Component 99</h3>
    <button type="button" (click)="increment99()">
      Count {{ count99() }}
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
  export class BenchmarkNg99 {
    count99 = signal(0);

    increment99() {
      this.count99.update((count) => count + 1);
    }
  }