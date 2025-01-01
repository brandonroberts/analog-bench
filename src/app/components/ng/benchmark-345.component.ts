
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-345',
    template: `<div class="benchmark-component">
    <h3>Component 345</h3>
    <button type="button" (click)="increment345()">
      Count {{ count345() }}
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
  export class BenchmarkNg345 {
    count345 = signal(0);

    increment345() {
      this.count345.update((count) => count + 1);
    }
  }