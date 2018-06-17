import React, {PureComponent} from 'react'
import './style.css'
import pizza from '../../assets/pizza.jpg'

class Menu extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            height: document.documentElement.clientHeight,
            width: document.documentElement.clientWidth
        };
        this.onResize = this.onResize.bind(this)
    }

    onResize(e) {
        this.setState({
                height: document.documentElement.clientHeight,
                width: document.documentElement.clientWidth
            }
        )
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
    }

    render() {
        let mapped = arr.map(function (item, i) {
            return menu_item(item, i)
        })
        return (
            <div className="menu">
                <ul className='menu_list'>
                    {mapped}
                </ul>
            </div>
        )
    }
}

export default Menu

const menu_item = (item, i) => {

    return (<li className={'' + setTimeout(function () {
        return 'rendered'
    }, 70*i)} style={{height: window.innerWidth / 4 + 'px', animationDelay: 70 * i + 'ms'}} key={'menuItem' + i}>
        <a href={item.href} className={"move"}>
            <span className="curtain"></span>
            <figure className={'menu_item_figure'}><img src={item.thumb} alt={item.text}/></figure>
            <div className="title">
                <div className="table">

                </div>
            </div>
        </a>
    </li>)
};


const arr = [{href: '/', thumb: pizza, text: 'as'},
    {href: '/', thumb: pizza, text: 'as'},
    {href: '/', thumb: pizza, text: 'as'},
    {href: '/', thumb: pizza, text: 'as'},
    {href: '/', thumb: pizza, text: 'as'},
    {href: '/', thumb: pizza, text: 'as'},
    {href: '/', thumb: pizza, text: 'as'},
    {href: '/', thumb: pizza, text: 'as'},
]
