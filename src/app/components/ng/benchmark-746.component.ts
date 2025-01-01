
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-746',
    template: `<div class="benchmark-component">
    <h3>Component 746</h3>
    <button type="button" (click)="increment746()">
      Count {{ count746() }}
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
  export class BenchmarkNg746 {
    count746 = signal(0);

    increment746() {
      this.count746.update((count) => count + 1);
    }
  }