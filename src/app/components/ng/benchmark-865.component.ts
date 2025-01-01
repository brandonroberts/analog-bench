
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-865',
    template: `<div class="benchmark-component">
    <h3>Component 865</h3>
    <button type="button" (click)="increment865()">
      Count {{ count865() }}
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
  export class BenchmarkNg865 {
    count865 = signal(0);

    increment865() {
      this.count865.update((count) => count + 1);
    }
  }