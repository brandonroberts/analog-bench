
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-223',
    template: `<div class="benchmark-component">
    <h3>Component 223</h3>
    <button type="button" (click)="increment223()">
      Count {{ count223() }}
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
  export class BenchmarkNg223 {
    count223 = signal(0);

    increment223() {
      this.count223.update((count) => count + 1);
    }
  }