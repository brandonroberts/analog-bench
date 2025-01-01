
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-39',
    template: `<div class="benchmark-component">
    <h3>Component 39</h3>
    <button type="button" (click)="increment39()">
      Count {{ count39() }}
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
  export class BenchmarkNg39 {
    count39 = signal(0);

    increment39() {
      this.count39.update((count) => count + 1);
    }
  }