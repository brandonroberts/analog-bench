
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-651',
    template: `<div class="benchmark-component">
    <h3>Component 651</h3>
    <button type="button" (click)="increment651()">
      Count {{ count651() }}
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
  export class BenchmarkNg651 {
    count651 = signal(0);

    increment651() {
      this.count651.update((count) => count + 1);
    }
  }