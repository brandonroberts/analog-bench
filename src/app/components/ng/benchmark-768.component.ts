
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-768',
    template: `<div class="benchmark-component">
    <h3>Component 768</h3>
    <button type="button" (click)="increment768()">
      Count {{ count768() }}
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
  export class BenchmarkNg768 {
    count768 = signal(0);

    increment768() {
      this.count768.update((count) => count + 1);
    }
  }