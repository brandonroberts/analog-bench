
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-841',
    template: `<div class="benchmark-component">
    <h3>Component 841</h3>
    <button type="button" (click)="increment841()">
      Count {{ count841() }}
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
  export class BenchmarkNg841 {
    count841 = signal(0);

    increment841() {
      this.count841.update((count) => count + 1);
    }
  }