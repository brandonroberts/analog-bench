
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-802',
    template: `<div class="benchmark-component">
    <h3>Component 802</h3>
    <button type="button" (click)="increment802()">
      Count {{ count802() }}
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
  export class BenchmarkNg802 {
    count802 = signal(0);

    increment802() {
      this.count802.update((count) => count + 1);
    }
  }