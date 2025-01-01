
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-711',
    template: `<div class="benchmark-component">
    <h3>Component 711</h3>
    <button type="button" (click)="increment711()">
      Count {{ count711() }}
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
  export class BenchmarkNg711 {
    count711 = signal(0);

    increment711() {
      this.count711.update((count) => count + 1);
    }
  }