
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-140',
    template: `<div class="benchmark-component">
    <h3>Component 140</h3>
    <button type="button" (click)="increment140()">
      Count {{ count140() }}
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
  export class BenchmarkNg140 {
    count140 = signal(0);

    increment140() {
      this.count140.update((count) => count + 1);
    }
  }