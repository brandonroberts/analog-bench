
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-590',
    template: `<div class="benchmark-component">
    <h3>Component 590</h3>
    <button type="button" (click)="increment590()">
      Count {{ count590() }}
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
  export class BenchmarkNg590 {
    count590 = signal(0);

    increment590() {
      this.count590.update((count) => count + 1);
    }
  }