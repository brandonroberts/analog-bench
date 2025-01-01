
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-709',
    template: `<div class="benchmark-component">
    <h3>Component 709</h3>
    <button type="button" (click)="increment709()">
      Count {{ count709() }}
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
  export class BenchmarkNg709 {
    count709 = signal(0);

    increment709() {
      this.count709.update((count) => count + 1);
    }
  }