
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-951',
    template: `<div class="benchmark-component">
    <h3>Component 951</h3>
    <button type="button" (click)="increment951()">
      Count {{ count951() }}
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
  export class BenchmarkNg951 {
    count951 = signal(0);

    increment951() {
      this.count951.update((count) => count + 1);
    }
  }