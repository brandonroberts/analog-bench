
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-319',
    template: `<div class="benchmark-component">
    <h3>Component 319</h3>
    <button type="button" (click)="increment319()">
      Count {{ count319() }}
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
  export class BenchmarkNg319 {
    count319 = signal(0);

    increment319() {
      this.count319.update((count) => count + 1);
    }
  }