
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-443',
    template: `<div class="benchmark-component">
    <h3>Component 443</h3>
    <button type="button" (click)="increment443()">
      Count {{ count443() }}
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
  export class BenchmarkNg443 {
    count443 = signal(0);

    increment443() {
      this.count443.update((count) => count + 1);
    }
  }