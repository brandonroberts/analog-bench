
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-45',
    template: `<div class="benchmark-component">
    <h3>Component 45</h3>
    <button type="button" (click)="increment45()">
      Count {{ count45() }}
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
  export class BenchmarkNg45 {
    count45 = signal(0);

    increment45() {
      this.count45.update((count) => count + 1);
    }
  }