
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-956',
    template: `<div class="benchmark-component">
    <h3>Component 956</h3>
    <button type="button" (click)="increment956()">
      Count {{ count956() }}
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
  export class BenchmarkNg956 {
    count956 = signal(0);

    increment956() {
      this.count956.update((count) => count + 1);
    }
  }