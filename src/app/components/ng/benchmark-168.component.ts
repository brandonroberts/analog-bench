
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-168',
    template: `<div class="benchmark-component">
    <h3>Component 168</h3>
    <button type="button" (click)="increment168()">
      Count {{ count168() }}
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
  export class BenchmarkNg168 {
    count168 = signal(0);

    increment168() {
      this.count168.update((count) => count + 1);
    }
  }