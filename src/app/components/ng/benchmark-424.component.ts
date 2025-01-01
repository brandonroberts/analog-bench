
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-424',
    template: `<div class="benchmark-component">
    <h3>Component 424</h3>
    <button type="button" (click)="increment424()">
      Count {{ count424() }}
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
  export class BenchmarkNg424 {
    count424 = signal(0);

    increment424() {
      this.count424.update((count) => count + 1);
    }
  }