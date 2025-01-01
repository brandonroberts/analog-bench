
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-24',
    template: `<div class="benchmark-component">
    <h3>Component 24</h3>
    <button type="button" (click)="increment24()">
      Count {{ count24() }}
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
  export class BenchmarkNg24 {
    count24 = signal(0);

    increment24() {
      this.count24.update((count) => count + 1);
    }
  }