
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-198',
    template: `<div class="benchmark-component">
    <h3>Component 198</h3>
    <button type="button" (click)="increment198()">
      Count {{ count198() }}
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
  export class BenchmarkNg198 {
    count198 = signal(0);

    increment198() {
      this.count198.update((count) => count + 1);
    }
  }