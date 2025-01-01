
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-858',
    template: `<div class="benchmark-component">
    <h3>Component 858</h3>
    <button type="button" (click)="increment858()">
      Count {{ count858() }}
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
  export class BenchmarkNg858 {
    count858 = signal(0);

    increment858() {
      this.count858.update((count) => count + 1);
    }
  }