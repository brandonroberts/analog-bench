
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-217',
    template: `<div class="benchmark-component">
    <h3>Component 217</h3>
    <button type="button" (click)="increment217()">
      Count {{ count217() }}
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
  export class BenchmarkNg217 {
    count217 = signal(0);

    increment217() {
      this.count217.update((count) => count + 1);
    }
  }