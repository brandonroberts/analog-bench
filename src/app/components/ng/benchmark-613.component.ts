
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-613',
    template: `<div class="benchmark-component">
    <h3>Component 613</h3>
    <button type="button" (click)="increment613()">
      Count {{ count613() }}
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
  export class BenchmarkNg613 {
    count613 = signal(0);

    increment613() {
      this.count613.update((count) => count + 1);
    }
  }