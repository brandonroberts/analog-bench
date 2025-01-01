
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-278',
    template: `<div class="benchmark-component">
    <h3>Component 278</h3>
    <button type="button" (click)="increment278()">
      Count {{ count278() }}
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
  export class BenchmarkNg278 {
    count278 = signal(0);

    increment278() {
      this.count278.update((count) => count + 1);
    }
  }