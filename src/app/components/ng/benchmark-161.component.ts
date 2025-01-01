
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-161',
    template: `<div class="benchmark-component">
    <h3>Component 161</h3>
    <button type="button" (click)="increment161()">
      Count {{ count161() }}
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
  export class BenchmarkNg161 {
    count161 = signal(0);

    increment161() {
      this.count161.update((count) => count + 1);
    }
  }