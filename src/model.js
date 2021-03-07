import image from 'url:./assets/image.png'
import {TitleBlock, TextBlock, ColumsBlock, ImageBlock} from './classes/blocks'

export const model = [
  new TitleBlock('Website builder', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      'text-align': 'center',
      padding: '1.5rem'
    }
  }),
  new TextBlock('text', {
    tag: 'p',
    styles: {
      color: 'red'
    }
  }),
  new ColumsBlock([
      'Colums 1',
      'Colums 2',
      'Colums 3'
    ],
    {
      tag: 'div',
      styles: {
        border: '1px solid gray',
        display: 'flex',
        'justify-content': 'space-between',
        'text-align': 'center'
      }
    }
  ),
  new ImageBlock(image, {
    tag: 'img',
    styles: { 
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: 'auto',
      height: '300px'
    }
  })
]