
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-373',
    template: `<div class="benchmark-component">
    <h3>Component 373</h3>
    <button type="button" (click)="increment373()">
      Count {{ count373() }}
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
  export class BenchmarkNg373 {
    count373 = signal(0);

    increment373() {
      this.count373.update((count) => count + 1);
    }
  }