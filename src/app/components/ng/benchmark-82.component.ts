
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-82',
    template: `<div class="benchmark-component">
    <h3>Component 82</h3>
    <button type="button" (click)="increment82()">
      Count {{ count82() }}
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
  export class BenchmarkNg82 {
    count82 = signal(0);

    increment82() {
      this.count82.update((count) => count + 1);
    }
  }