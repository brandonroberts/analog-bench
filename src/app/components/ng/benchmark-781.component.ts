
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-781',
    template: `<div class="benchmark-component">
    <h3>Component 781</h3>
    <button type="button" (click)="increment781()">
      Count {{ count781() }}
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
  export class BenchmarkNg781 {
    count781 = signal(0);

    increment781() {
      this.count781.update((count) => count + 1);
    }
  }