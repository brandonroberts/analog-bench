
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-311',
    template: `<div class="benchmark-component">
    <h3>Component 311</h3>
    <button type="button" (click)="increment311()">
      Count {{ count311() }}
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
  export class BenchmarkNg311 {
    count311 = signal(0);

    increment311() {
      this.count311.update((count) => count + 1);
    }
  }