
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-540',
    template: `<div class="benchmark-component">
    <h3>Component 540</h3>
    <button type="button" (click)="increment540()">
      Count {{ count540() }}
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
  export class BenchmarkNg540 {
    count540 = signal(0);

    increment540() {
      this.count540.update((count) => count + 1);
    }
  }