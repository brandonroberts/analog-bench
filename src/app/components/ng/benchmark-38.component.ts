
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-38',
    template: `<div class="benchmark-component">
    <h3>Component 38</h3>
    <button type="button" (click)="increment38()">
      Count {{ count38() }}
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
  export class BenchmarkNg38 {
    count38 = signal(0);

    increment38() {
      this.count38.update((count) => count + 1);
    }
  }