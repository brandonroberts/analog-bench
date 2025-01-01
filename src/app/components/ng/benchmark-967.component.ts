
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-967',
    template: `<div class="benchmark-component">
    <h3>Component 967</h3>
    <button type="button" (click)="increment967()">
      Count {{ count967() }}
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
  export class BenchmarkNg967 {
    count967 = signal(0);

    increment967() {
      this.count967.update((count) => count + 1);
    }
  }