
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-866',
    template: `<div class="benchmark-component">
    <h3>Component 866</h3>
    <button type="button" (click)="increment866()">
      Count {{ count866() }}
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
  export class BenchmarkNg866 {
    count866 = signal(0);

    increment866() {
      this.count866.update((count) => count + 1);
    }
  }