
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-564',
    template: `<div class="benchmark-component">
    <h3>Component 564</h3>
    <button type="button" (click)="increment564()">
      Count {{ count564() }}
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
  export class BenchmarkNg564 {
    count564 = signal(0);

    increment564() {
      this.count564.update((count) => count + 1);
    }
  }