
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-200',
    template: `<div class="benchmark-component">
    <h3>Component 200</h3>
    <button type="button" (click)="increment200()">
      Count {{ count200() }}
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
  export class BenchmarkNg200 {
    count200 = signal(0);

    increment200() {
      this.count200.update((count) => count + 1);
    }
  }