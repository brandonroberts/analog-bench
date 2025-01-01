
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-867',
    template: `<div class="benchmark-component">
    <h3>Component 867</h3>
    <button type="button" (click)="increment867()">
      Count {{ count867() }}
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
  export class BenchmarkNg867 {
    count867 = signal(0);

    increment867() {
      this.count867.update((count) => count + 1);
    }
  }