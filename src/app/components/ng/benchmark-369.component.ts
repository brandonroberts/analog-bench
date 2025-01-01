
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-369',
    template: `<div class="benchmark-component">
    <h3>Component 369</h3>
    <button type="button" (click)="increment369()">
      Count {{ count369() }}
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
  export class BenchmarkNg369 {
    count369 = signal(0);

    increment369() {
      this.count369.update((count) => count + 1);
    }
  }