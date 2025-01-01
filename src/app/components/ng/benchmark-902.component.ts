
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-902',
    template: `<div class="benchmark-component">
    <h3>Component 902</h3>
    <button type="button" (click)="increment902()">
      Count {{ count902() }}
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
  export class BenchmarkNg902 {
    count902 = signal(0);

    increment902() {
      this.count902.update((count) => count + 1);
    }
  }