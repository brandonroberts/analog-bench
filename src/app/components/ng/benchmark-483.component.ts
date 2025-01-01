
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-483',
    template: `<div class="benchmark-component">
    <h3>Component 483</h3>
    <button type="button" (click)="increment483()">
      Count {{ count483() }}
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
  export class BenchmarkNg483 {
    count483 = signal(0);

    increment483() {
      this.count483.update((count) => count + 1);
    }
  }