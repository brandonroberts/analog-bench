
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-159',
    template: `<div class="benchmark-component">
    <h3>Component 159</h3>
    <button type="button" (click)="increment159()">
      Count {{ count159() }}
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
  export class BenchmarkNg159 {
    count159 = signal(0);

    increment159() {
      this.count159.update((count) => count + 1);
    }
  }