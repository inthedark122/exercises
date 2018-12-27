const React = require('react')

/**
 * Суть задачи: при клике нужно залогировать клик с соответвующим index
 * 1 реализация: клик логируется не верный
 * 2 реализация: нужно написать клик посредством react
 */

class Links extends React.Component {
  constructor (props) {
    super(props)

    this.rootRef = React.createRef()
  }

  componentDidMount () {
    const childrens = [...this.rootRef.current.children]

    for (var i = 0; i < childrens.length; i++) {
      childrens[i].addEventListener('click', () => {
        this.props.log(`clicked ${i} link`)
      })
    }
  }

  render () {
    return <div ref={this.rootRef}>{new Array(10).fill(0).map((v, index) => (
      <a
        key={index}
        href={`link-${index}`}
      >
        link-{index}
      </a>
    ))}</div>
  }
}

class Links2 extends React.Component {
  render () {
    return <div>{new Array(10).fill(0).map((v, index) => (
      <a
        key={index}
        href={`link-${index}`}
      >
      link-{index}
      </a>
    ))}</div>
  }
}

exports.Links = Links
exports.Links2 = Links2
