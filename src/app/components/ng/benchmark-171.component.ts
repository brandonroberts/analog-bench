
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-171',
    template: `<div class="benchmark-component">
    <h3>Component 171</h3>
    <button type="button" (click)="increment171()">
      Count {{ count171() }}
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
  export class BenchmarkNg171 {
    count171 = signal(0);

    increment171() {
      this.count171.update((count) => count + 1);
    }
  }