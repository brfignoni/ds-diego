import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'dlk-text',
  styleUrl: 'dlk-text.scss',
  shadow: true,
})
export class DlkText {
  @Prop() type: textType = 'medium';

  render() {
    return (
      <Host>
        <p
          class={{
            'text': true,
            'text--regular': this.type === 'regular',
            'text--medium': this.type === 'medium',
            'text--large': this.type === 'large',
          }}
        >
          <slot></slot>
        </p>
      </Host>
    );
  }
}

export type textType = 'regular' | 'medium' | 'large';
