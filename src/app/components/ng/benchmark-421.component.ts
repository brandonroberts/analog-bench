
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-421',
    template: `<div class="benchmark-component">
    <h3>Component 421</h3>
    <button type="button" (click)="increment421()">
      Count {{ count421() }}
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
  export class BenchmarkNg421 {
    count421 = signal(0);

    increment421() {
      this.count421.update((count) => count + 1);
    }
  }