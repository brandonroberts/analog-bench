
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-484',
    template: `<div class="benchmark-component">
    <h3>Component 484</h3>
    <button type="button" (click)="increment484()">
      Count {{ count484() }}
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
  export class BenchmarkNg484 {
    count484 = signal(0);

    increment484() {
      this.count484.update((count) => count + 1);
    }
  }