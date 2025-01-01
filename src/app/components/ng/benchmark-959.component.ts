
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-959',
    template: `<div class="benchmark-component">
    <h3>Component 959</h3>
    <button type="button" (click)="increment959()">
      Count {{ count959() }}
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
  export class BenchmarkNg959 {
    count959 = signal(0);

    increment959() {
      this.count959.update((count) => count + 1);
    }
  }