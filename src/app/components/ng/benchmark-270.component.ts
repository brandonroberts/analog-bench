
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-270',
    template: `<div class="benchmark-component">
    <h3>Component 270</h3>
    <button type="button" (click)="increment270()">
      Count {{ count270() }}
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
  export class BenchmarkNg270 {
    count270 = signal(0);

    increment270() {
      this.count270.update((count) => count + 1);
    }
  }