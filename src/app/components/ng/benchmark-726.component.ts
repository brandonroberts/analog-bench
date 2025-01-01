
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-726',
    template: `<div class="benchmark-component">
    <h3>Component 726</h3>
    <button type="button" (click)="increment726()">
      Count {{ count726() }}
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
  export class BenchmarkNg726 {
    count726 = signal(0);

    increment726() {
      this.count726.update((count) => count + 1);
    }
  }