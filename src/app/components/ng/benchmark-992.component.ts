
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-992',
    template: `<div class="benchmark-component">
    <h3>Component 992</h3>
    <button type="button" (click)="increment992()">
      Count {{ count992() }}
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
  export class BenchmarkNg992 {
    count992 = signal(0);

    increment992() {
      this.count992.update((count) => count + 1);
    }
  }