
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-993',
    template: `<div class="benchmark-component">
    <h3>Component 993</h3>
    <button type="button" (click)="increment993()">
      Count {{ count993() }}
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
  export class BenchmarkNg993 {
    count993 = signal(0);

    increment993() {
      this.count993.update((count) => count + 1);
    }
  }