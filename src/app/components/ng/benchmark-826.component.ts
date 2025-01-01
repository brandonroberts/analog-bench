
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-826',
    template: `<div class="benchmark-component">
    <h3>Component 826</h3>
    <button type="button" (click)="increment826()">
      Count {{ count826() }}
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
  export class BenchmarkNg826 {
    count826 = signal(0);

    increment826() {
      this.count826.update((count) => count + 1);
    }
  }