
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-906',
    template: `<div class="benchmark-component">
    <h3>Component 906</h3>
    <button type="button" (click)="increment906()">
      Count {{ count906() }}
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
  export class BenchmarkNg906 {
    count906 = signal(0);

    increment906() {
      this.count906.update((count) => count + 1);
    }
  }