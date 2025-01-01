
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-909',
    template: `<div class="benchmark-component">
    <h3>Component 909</h3>
    <button type="button" (click)="increment909()">
      Count {{ count909() }}
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
  export class BenchmarkNg909 {
    count909 = signal(0);

    increment909() {
      this.count909.update((count) => count + 1);
    }
  }