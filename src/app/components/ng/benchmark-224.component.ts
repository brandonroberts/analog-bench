
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-224',
    template: `<div class="benchmark-component">
    <h3>Component 224</h3>
    <button type="button" (click)="increment224()">
      Count {{ count224() }}
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
  export class BenchmarkNg224 {
    count224 = signal(0);

    increment224() {
      this.count224.update((count) => count + 1);
    }
  }