
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1175',
    template: `<div class="benchmark-component">
    <h3>Component 1175</h3>
    <button type="button" (click)="increment1175()">
      Count {{ count1175() }}
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
  export class BenchmarkNg1175 {
    count1175 = signal(0);

    increment1175() {
      this.count1175.update((count) => count + 1);
    }
  }