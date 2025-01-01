
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-748',
    template: `<div class="benchmark-component">
    <h3>Component 748</h3>
    <button type="button" (click)="increment748()">
      Count {{ count748() }}
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
  export class BenchmarkNg748 {
    count748 = signal(0);

    increment748() {
      this.count748.update((count) => count + 1);
    }
  }