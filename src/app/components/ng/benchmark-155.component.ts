
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-155',
    template: `<div class="benchmark-component">
    <h3>Component 155</h3>
    <button type="button" (click)="increment155()">
      Count {{ count155() }}
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
  export class BenchmarkNg155 {
    count155 = signal(0);

    increment155() {
      this.count155.update((count) => count + 1);
    }
  }