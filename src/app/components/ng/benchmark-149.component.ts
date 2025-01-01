
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-149',
    template: `<div class="benchmark-component">
    <h3>Component 149</h3>
    <button type="button" (click)="increment149()">
      Count {{ count149() }}
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
  export class BenchmarkNg149 {
    count149 = signal(0);

    increment149() {
      this.count149.update((count) => count + 1);
    }
  }