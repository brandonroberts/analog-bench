
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-380',
    template: `<div class="benchmark-component">
    <h3>Component 380</h3>
    <button type="button" (click)="increment380()">
      Count {{ count380() }}
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
  export class BenchmarkNg380 {
    count380 = signal(0);

    increment380() {
      this.count380.update((count) => count + 1);
    }
  }