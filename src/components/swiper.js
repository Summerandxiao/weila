import React,{Component} from "react" ;
import { Carousel, WingBlank } from 'antd-mobile';
class Swiper extends Component{
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    componentDidMount(){
     
        // let url="/qq/api/generalize/query/?type=30&_=1554264944107"
        // this.$axios.get(url).then(data => {
        //   console.log(data)
        // })
        this.$axios.get("https://www.daxunxun.com/banner")
            .then((data) => {
              let list = data.map((item,index)=>{
                return `https://www.daxunxun.com${item}`
              })
              console.log(list)
              this.setState({
                list:list 
              })
            })
      }
      render(){
          let {list} = this.state
          return(
            <WingBlank className="banner">
            <Carousel
              autoplay={true}
              infinite
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
              {list.map(val => (
                <a
                  key={val}
                  href="http://www.alipay.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={val}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </WingBlank>
          )
      }
}
export default Swiper;