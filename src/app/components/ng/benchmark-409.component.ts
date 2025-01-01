
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-409',
    template: `<div class="benchmark-component">
    <h3>Component 409</h3>
    <button type="button" (click)="increment409()">
      Count {{ count409() }}
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
  export class BenchmarkNg409 {
    count409 = signal(0);

    increment409() {
      this.count409.update((count) => count + 1);
    }
  }