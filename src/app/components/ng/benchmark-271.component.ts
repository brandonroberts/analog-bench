
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-271',
    template: `<div class="benchmark-component">
    <h3>Component 271</h3>
    <button type="button" (click)="increment271()">
      Count {{ count271() }}
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
  export class BenchmarkNg271 {
    count271 = signal(0);

    increment271() {
      this.count271.update((count) => count + 1);
    }
  }