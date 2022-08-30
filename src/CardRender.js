import Card from './Card'
import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'


const CardRender = () => {
    return ( 
            <div className='CardRender'>
            <Card
                status='Sold Out'
                img={image1}
                rating='5.0'
                reviewCount='6'
                country='USA'
                title='Life Lessons with Katie Zaferes'
                price='$136'
            />
            <Card
                status='Online'
                img={image2}
                rating='5.0'
                reviewCount='6'
                country='USA'
                title='Learn Wedding photography'
                price='$125'
            />
            <Card
                status=''
                img={image3}
                rating='4.8'
                reviewCount='2'
                country='USA'
                title='Group Mountain Biking'
                price='$50'
               
            />
            </div>

     );
}
 
export default CardRender;