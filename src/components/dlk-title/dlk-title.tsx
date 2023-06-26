import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'dlk-title',
  styleUrl: 'dlk-title.scss',
  shadow: true,
})
export class DlkTitle {
  @Prop() titleType: titleType = 'h1';

  renderTitle = () => {
    if (this.titleType === 'h1') {
      return (
        <h1 class="title">
          <slot></slot>
        </h1>
      );
    } else if (this.titleType === 'h2') {
      return (
        <h2 class="title">
          <slot></slot>
        </h2>
      );
    } else {
      return (
        <h3 class="title">
          <slot></slot>
        </h3>
      );
    }
  };

  render() {
    return <Host>{this.renderTitle()}</Host>;
  }
}

export type titleType = 'h1' | 'h2' | 'h3';
