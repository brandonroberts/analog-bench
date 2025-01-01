
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-182',
    template: `<div class="benchmark-component">
    <h3>Component 182</h3>
    <button type="button" (click)="increment182()">
      Count {{ count182() }}
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
  export class BenchmarkNg182 {
    count182 = signal(0);

    increment182() {
      this.count182.update((count) => count + 1);
    }
  }