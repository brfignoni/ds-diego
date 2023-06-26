import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'dlk-content',
  styleUrl: 'dlk-content.scss',
  shadow: true,
})
export class DlkContent {
  @Prop() preTitle: string;
  @Prop() title: string;
  @Prop() alignment: alignmentType = 'left';

  render() {
    return (
      <Host>
        <div class="container">
          <div class={{ 'col': true, 'col--left': true }}>
            {this.preTitle ? <dlk-text>{this.preTitle}</dlk-text> : null}
            {this.title ? <dlk-title>{this.title}</dlk-title> : null}
            <slot></slot>
          </div>
          <div class={{ 'col': true, 'col--right': true }}>
            <slot name="media"></slot>
          </div>
        </div>
      </Host>
    );
  }
}

export type alignmentType = 'left' | 'right';
