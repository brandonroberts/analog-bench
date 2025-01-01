
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-428',
    template: `<div class="benchmark-component">
    <h3>Component 428</h3>
    <button type="button" (click)="increment428()">
      Count {{ count428() }}
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
  export class BenchmarkNg428 {
    count428 = signal(0);

    increment428() {
      this.count428.update((count) => count + 1);
    }
  }