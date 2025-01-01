
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-699',
    template: `<div class="benchmark-component">
    <h3>Component 699</h3>
    <button type="button" (click)="increment699()">
      Count {{ count699() }}
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
  export class BenchmarkNg699 {
    count699 = signal(0);

    increment699() {
      this.count699.update((count) => count + 1);
    }
  }