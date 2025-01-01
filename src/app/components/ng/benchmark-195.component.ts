
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-195',
    template: `<div class="benchmark-component">
    <h3>Component 195</h3>
    <button type="button" (click)="increment195()">
      Count {{ count195() }}
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
  export class BenchmarkNg195 {
    count195 = signal(0);

    increment195() {
      this.count195.update((count) => count + 1);
    }
  }