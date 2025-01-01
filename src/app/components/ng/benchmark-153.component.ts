
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-153',
    template: `<div class="benchmark-component">
    <h3>Component 153</h3>
    <button type="button" (click)="increment153()">
      Count {{ count153() }}
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
  export class BenchmarkNg153 {
    count153 = signal(0);

    increment153() {
      this.count153.update((count) => count + 1);
    }
  }