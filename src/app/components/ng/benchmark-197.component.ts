
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-197',
    template: `<div class="benchmark-component">
    <h3>Component 197</h3>
    <button type="button" (click)="increment197()">
      Count {{ count197() }}
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
  export class BenchmarkNg197 {
    count197 = signal(0);

    increment197() {
      this.count197.update((count) => count + 1);
    }
  }