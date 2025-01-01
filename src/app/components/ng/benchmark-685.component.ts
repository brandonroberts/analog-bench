
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-685',
    template: `<div class="benchmark-component">
    <h3>Component 685</h3>
    <button type="button" (click)="increment685()">
      Count {{ count685() }}
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
  export class BenchmarkNg685 {
    count685 = signal(0);

    increment685() {
      this.count685.update((count) => count + 1);
    }
  }