
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-861',
    template: `<div class="benchmark-component">
    <h3>Component 861</h3>
    <button type="button" (click)="increment861()">
      Count {{ count861() }}
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
  export class BenchmarkNg861 {
    count861 = signal(0);

    increment861() {
      this.count861.update((count) => count + 1);
    }
  }