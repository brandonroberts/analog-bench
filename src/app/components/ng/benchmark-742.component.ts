
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-742',
    template: `<div class="benchmark-component">
    <h3>Component 742</h3>
    <button type="button" (click)="increment742()">
      Count {{ count742() }}
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
  export class BenchmarkNg742 {
    count742 = signal(0);

    increment742() {
      this.count742.update((count) => count + 1);
    }
  }