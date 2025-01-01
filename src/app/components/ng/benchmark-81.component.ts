
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-81',
    template: `<div class="benchmark-component">
    <h3>Component 81</h3>
    <button type="button" (click)="increment81()">
      Count {{ count81() }}
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
  export class BenchmarkNg81 {
    count81 = signal(0);

    increment81() {
      this.count81.update((count) => count + 1);
    }
  }