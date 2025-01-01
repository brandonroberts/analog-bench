
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-185',
    template: `<div class="benchmark-component">
    <h3>Component 185</h3>
    <button type="button" (click)="increment185()">
      Count {{ count185() }}
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
  export class BenchmarkNg185 {
    count185 = signal(0);

    increment185() {
      this.count185.update((count) => count + 1);
    }
  }