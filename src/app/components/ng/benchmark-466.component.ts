
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-466',
    template: `<div class="benchmark-component">
    <h3>Component 466</h3>
    <button type="button" (click)="increment466()">
      Count {{ count466() }}
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
  export class BenchmarkNg466 {
    count466 = signal(0);

    increment466() {
      this.count466.update((count) => count + 1);
    }
  }