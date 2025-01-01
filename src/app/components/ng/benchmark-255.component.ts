
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-255',
    template: `<div class="benchmark-component">
    <h3>Component 255</h3>
    <button type="button" (click)="increment255()">
      Count {{ count255() }}
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
  export class BenchmarkNg255 {
    count255 = signal(0);

    increment255() {
      this.count255.update((count) => count + 1);
    }
  }