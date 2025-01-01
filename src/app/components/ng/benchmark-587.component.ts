
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-587',
    template: `<div class="benchmark-component">
    <h3>Component 587</h3>
    <button type="button" (click)="increment587()">
      Count {{ count587() }}
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
  export class BenchmarkNg587 {
    count587 = signal(0);

    increment587() {
      this.count587.update((count) => count + 1);
    }
  }