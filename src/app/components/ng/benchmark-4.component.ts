
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-4',
    template: `<div class="benchmark-component">
    <h3>Component 4</h3>
    <button type="button" (click)="increment4()">
      Count {{ count4() }}
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
  export class BenchmarkNg4 {
    count4 = signal(0);

    increment4() {
      this.count4.update((count) => count + 1);
    }
  }