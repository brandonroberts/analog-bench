
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-848',
    template: `<div class="benchmark-component">
    <h3>Component 848</h3>
    <button type="button" (click)="increment848()">
      Count {{ count848() }}
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
  export class BenchmarkNg848 {
    count848 = signal(0);

    increment848() {
      this.count848.update((count) => count + 1);
    }
  }