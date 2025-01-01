
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-562',
    template: `<div class="benchmark-component">
    <h3>Component 562</h3>
    <button type="button" (click)="increment562()">
      Count {{ count562() }}
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
  export class BenchmarkNg562 {
    count562 = signal(0);

    increment562() {
      this.count562.update((count) => count + 1);
    }
  }