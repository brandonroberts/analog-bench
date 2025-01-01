
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-683',
    template: `<div class="benchmark-component">
    <h3>Component 683</h3>
    <button type="button" (click)="increment683()">
      Count {{ count683() }}
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
  export class BenchmarkNg683 {
    count683 = signal(0);

    increment683() {
      this.count683.update((count) => count + 1);
    }
  }