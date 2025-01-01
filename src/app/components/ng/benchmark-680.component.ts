
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-680',
    template: `<div class="benchmark-component">
    <h3>Component 680</h3>
    <button type="button" (click)="increment680()">
      Count {{ count680() }}
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
  export class BenchmarkNg680 {
    count680 = signal(0);

    increment680() {
      this.count680.update((count) => count + 1);
    }
  }