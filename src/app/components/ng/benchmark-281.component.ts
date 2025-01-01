
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-281',
    template: `<div class="benchmark-component">
    <h3>Component 281</h3>
    <button type="button" (click)="increment281()">
      Count {{ count281() }}
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
  export class BenchmarkNg281 {
    count281 = signal(0);

    increment281() {
      this.count281.update((count) => count + 1);
    }
  }