
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-51',
    template: `<div class="benchmark-component">
    <h3>Component 51</h3>
    <button type="button" (click)="increment51()">
      Count {{ count51() }}
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
  export class BenchmarkNg51 {
    count51 = signal(0);

    increment51() {
      this.count51.update((count) => count + 1);
    }
  }