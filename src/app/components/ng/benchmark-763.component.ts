
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-763',
    template: `<div class="benchmark-component">
    <h3>Component 763</h3>
    <button type="button" (click)="increment763()">
      Count {{ count763() }}
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
  export class BenchmarkNg763 {
    count763 = signal(0);

    increment763() {
      this.count763.update((count) => count + 1);
    }
  }