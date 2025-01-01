
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-894',
    template: `<div class="benchmark-component">
    <h3>Component 894</h3>
    <button type="button" (click)="increment894()">
      Count {{ count894() }}
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
  export class BenchmarkNg894 {
    count894 = signal(0);

    increment894() {
      this.count894.update((count) => count + 1);
    }
  }