import CardSlider2 from './components/CardSlider2'
import './App.css'
import Foater from './components/Foater'
import Menu from './components/Menu'
import Navigation from './components/Navigation'
import SectionTwo from './components/SectionTwo'
import CardSlider from './components/CardSlider'
import Image from './components/Image'

const slides=[
    {Image:'https://cdn.bestreviews.com/images/v4desktop/image-full-page-cb/starbucks-just-released-3-new-summer-drinks--2.jpg',title:'Honey Almondmilk Cold Brew',description:"₹500"},
    {Image:'https://cdn.bestreviews.com/images/v4desktop/image-full-page-cb/starbucks-just-released-3-new-summer-drinks--3.jpg',title:'Pistachio Latte',description:'₹400'},
    {Image:'https://cdn.bestreviews.com/images/v4desktop/image-full-page-cb/starbucks-just-released-3-new-summer-drinks--4.jpg',title:'Honey Almondmilk Flat White',description:'₹ 456'},
    {Image:'https://stories.starbucks.com/uploads/sites/29/2023/04/230303_Starbucks_9819_02_1M-1024x685.jpg',title:'Baby Yoda Frappuccino',description:'₹ 456'},
    {Image:'https://cdn.bestreviews.com/images/v4desktop/image-full-page-cb/starbucks-just-released-3-new-summer-drinks--3.jpg',title:'Butterbeer Drinks',description:'₹ 456'},
    {Image:'https://stories.starbucks.com/uploads/sites/29/2023/04/230303_Starbucks10094_01_1M-1024x679.jpg',title:'Chocolate Mousse Coldbrew',description:'₹ 456'},
  ]
function App(){
    return(
        <div>~
       <Navigation/>
       <SectionTwo/>
       <Menu/>
       <CardSlider slides={slides}/>
       <CardSlider2/>
      <Image/>
      <Foater/>

       </div>
       
     
    )
}

export default App