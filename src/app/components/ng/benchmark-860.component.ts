
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-860',
    template: `<div class="benchmark-component">
    <h3>Component 860</h3>
    <button type="button" (click)="increment860()">
      Count {{ count860() }}
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
  export class BenchmarkNg860 {
    count860 = signal(0);

    increment860() {
      this.count860.update((count) => count + 1);
    }
  }