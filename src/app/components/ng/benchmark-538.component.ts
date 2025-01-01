
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-538',
    template: `<div class="benchmark-component">
    <h3>Component 538</h3>
    <button type="button" (click)="increment538()">
      Count {{ count538() }}
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
  export class BenchmarkNg538 {
    count538 = signal(0);

    increment538() {
      this.count538.update((count) => count + 1);
    }
  }