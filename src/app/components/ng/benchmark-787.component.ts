
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-787',
    template: `<div class="benchmark-component">
    <h3>Component 787</h3>
    <button type="button" (click)="increment787()">
      Count {{ count787() }}
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
  export class BenchmarkNg787 {
    count787 = signal(0);

    increment787() {
      this.count787.update((count) => count + 1);
    }
  }