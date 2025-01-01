
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-174',
    template: `<div class="benchmark-component">
    <h3>Component 174</h3>
    <button type="button" (click)="increment174()">
      Count {{ count174() }}
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
  export class BenchmarkNg174 {
    count174 = signal(0);

    increment174() {
      this.count174.update((count) => count + 1);
    }
  }