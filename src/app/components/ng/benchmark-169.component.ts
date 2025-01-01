
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-169',
    template: `<div class="benchmark-component">
    <h3>Component 169</h3>
    <button type="button" (click)="increment169()">
      Count {{ count169() }}
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
  export class BenchmarkNg169 {
    count169 = signal(0);

    increment169() {
      this.count169.update((count) => count + 1);
    }
  }