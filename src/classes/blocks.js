import {row, col, css} from '../utils'

class Block {
  constructor(type, value, options) {
    this.type = type
    this.value = value
    this.options = options
  }

  toHTML() {
    throw new Error('Метод должен быть реализован')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super('title', value, options)
  }

  toHTML() {
    const {tag = 'h1', styles} = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super('text', value, options)
  }

  toHTML() {
    const {tag = 'p', styles} = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
  }
}

export class ColumsBlock extends Block {
  constructor(value, options) {
    super('colums', value, options)
  }

  toHTML() {
    const {tag = 'div', styles} = this.options
    const html = this.value.map(col).join('')
    return row(`${html}`, css(styles))
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super('image', value, options)
  }

  toHTML() {
    const {tag = 'img', styles, imageStyles} = this.options
    return row(`<${tag} src=${this.value} style="${css(imageStyles)}" />`, css(styles))
  }
}