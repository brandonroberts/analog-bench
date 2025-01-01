
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-254',
    template: `<div class="benchmark-component">
    <h3>Component 254</h3>
    <button type="button" (click)="increment254()">
      Count {{ count254() }}
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
  export class BenchmarkNg254 {
    count254 = signal(0);

    increment254() {
      this.count254.update((count) => count + 1);
    }
  }