
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-461',
    template: `<div class="benchmark-component">
    <h3>Component 461</h3>
    <button type="button" (click)="increment461()">
      Count {{ count461() }}
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
  export class BenchmarkNg461 {
    count461 = signal(0);

    increment461() {
      this.count461.update((count) => count + 1);
    }
  }