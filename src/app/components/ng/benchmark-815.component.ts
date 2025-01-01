
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-815',
    template: `<div class="benchmark-component">
    <h3>Component 815</h3>
    <button type="button" (click)="increment815()">
      Count {{ count815() }}
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
  export class BenchmarkNg815 {
    count815 = signal(0);

    increment815() {
      this.count815.update((count) => count + 1);
    }
  }