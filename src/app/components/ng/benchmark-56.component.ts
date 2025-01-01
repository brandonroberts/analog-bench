
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-56',
    template: `<div class="benchmark-component">
    <h3>Component 56</h3>
    <button type="button" (click)="increment56()">
      Count {{ count56() }}
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
  export class BenchmarkNg56 {
    count56 = signal(0);

    increment56() {
      this.count56.update((count) => count + 1);
    }
  }