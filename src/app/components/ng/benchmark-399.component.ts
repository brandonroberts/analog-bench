
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-399',
    template: `<div class="benchmark-component">
    <h3>Component 399</h3>
    <button type="button" (click)="increment399()">
      Count {{ count399() }}
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
  export class BenchmarkNg399 {
    count399 = signal(0);

    increment399() {
      this.count399.update((count) => count + 1);
    }
  }