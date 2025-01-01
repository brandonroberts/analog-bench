
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-937',
    template: `<div class="benchmark-component">
    <h3>Component 937</h3>
    <button type="button" (click)="increment937()">
      Count {{ count937() }}
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
  export class BenchmarkNg937 {
    count937 = signal(0);

    increment937() {
      this.count937.update((count) => count + 1);
    }
  }