
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-147',
    template: `<div class="benchmark-component">
    <h3>Component 147</h3>
    <button type="button" (click)="increment147()">
      Count {{ count147() }}
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
  export class BenchmarkNg147 {
    count147 = signal(0);

    increment147() {
      this.count147.update((count) => count + 1);
    }
  }