
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-874',
    template: `<div class="benchmark-component">
    <h3>Component 874</h3>
    <button type="button" (click)="increment874()">
      Count {{ count874() }}
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
  export class BenchmarkNg874 {
    count874 = signal(0);

    increment874() {
      this.count874.update((count) => count + 1);
    }
  }