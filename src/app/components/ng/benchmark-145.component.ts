
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-145',
    template: `<div class="benchmark-component">
    <h3>Component 145</h3>
    <button type="button" (click)="increment145()">
      Count {{ count145() }}
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
  export class BenchmarkNg145 {
    count145 = signal(0);

    increment145() {
      this.count145.update((count) => count + 1);
    }
  }