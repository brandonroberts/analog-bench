
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-970',
    template: `<div class="benchmark-component">
    <h3>Component 970</h3>
    <button type="button" (click)="increment970()">
      Count {{ count970() }}
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
  export class BenchmarkNg970 {
    count970 = signal(0);

    increment970() {
      this.count970.update((count) => count + 1);
    }
  }