
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-752',
    template: `<div class="benchmark-component">
    <h3>Component 752</h3>
    <button type="button" (click)="increment752()">
      Count {{ count752() }}
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
  export class BenchmarkNg752 {
    count752 = signal(0);

    increment752() {
      this.count752.update((count) => count + 1);
    }
  }