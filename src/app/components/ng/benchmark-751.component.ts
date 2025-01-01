
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-751',
    template: `<div class="benchmark-component">
    <h3>Component 751</h3>
    <button type="button" (click)="increment751()">
      Count {{ count751() }}
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
  export class BenchmarkNg751 {
    count751 = signal(0);

    increment751() {
      this.count751.update((count) => count + 1);
    }
  }