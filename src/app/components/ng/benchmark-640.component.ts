
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-640',
    template: `<div class="benchmark-component">
    <h3>Component 640</h3>
    <button type="button" (click)="increment640()">
      Count {{ count640() }}
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
  export class BenchmarkNg640 {
    count640 = signal(0);

    increment640() {
      this.count640.update((count) => count + 1);
    }
  }