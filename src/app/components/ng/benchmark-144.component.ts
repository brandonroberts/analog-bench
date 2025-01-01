
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-144',
    template: `<div class="benchmark-component">
    <h3>Component 144</h3>
    <button type="button" (click)="increment144()">
      Count {{ count144() }}
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
  export class BenchmarkNg144 {
    count144 = signal(0);

    increment144() {
      this.count144.update((count) => count + 1);
    }
  }