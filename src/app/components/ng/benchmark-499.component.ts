
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-499',
    template: `<div class="benchmark-component">
    <h3>Component 499</h3>
    <button type="button" (click)="increment499()">
      Count {{ count499() }}
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
  export class BenchmarkNg499 {
    count499 = signal(0);

    increment499() {
      this.count499.update((count) => count + 1);
    }
  }