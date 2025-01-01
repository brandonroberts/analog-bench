
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-911',
    template: `<div class="benchmark-component">
    <h3>Component 911</h3>
    <button type="button" (click)="increment911()">
      Count {{ count911() }}
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
  export class BenchmarkNg911 {
    count911 = signal(0);

    increment911() {
      this.count911.update((count) => count + 1);
    }
  }