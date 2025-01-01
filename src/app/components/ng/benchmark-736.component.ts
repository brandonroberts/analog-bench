
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-736',
    template: `<div class="benchmark-component">
    <h3>Component 736</h3>
    <button type="button" (click)="increment736()">
      Count {{ count736() }}
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
  export class BenchmarkNg736 {
    count736 = signal(0);

    increment736() {
      this.count736.update((count) => count + 1);
    }
  }