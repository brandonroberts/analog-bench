
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-349',
    template: `<div class="benchmark-component">
    <h3>Component 349</h3>
    <button type="button" (click)="increment349()">
      Count {{ count349() }}
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
  export class BenchmarkNg349 {
    count349 = signal(0);

    increment349() {
      this.count349.update((count) => count + 1);
    }
  }