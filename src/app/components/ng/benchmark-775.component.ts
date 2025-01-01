
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-775',
    template: `<div class="benchmark-component">
    <h3>Component 775</h3>
    <button type="button" (click)="increment775()">
      Count {{ count775() }}
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
  export class BenchmarkNg775 {
    count775 = signal(0);

    increment775() {
      this.count775.update((count) => count + 1);
    }
  }