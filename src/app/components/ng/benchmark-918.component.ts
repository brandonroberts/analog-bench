
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-918',
    template: `<div class="benchmark-component">
    <h3>Component 918</h3>
    <button type="button" (click)="increment918()">
      Count {{ count918() }}
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
  export class BenchmarkNg918 {
    count918 = signal(0);

    increment918() {
      this.count918.update((count) => count + 1);
    }
  }