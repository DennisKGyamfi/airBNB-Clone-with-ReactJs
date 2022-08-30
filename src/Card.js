// import image1 from './images/image1.png'
import Star from './images/Star.png'


const Card = (props) => {
    return ( 
        <div className="card">
            <span className='textOnImage'>{props.status}</span>
            <img src={props.img} className="card--image" alt='swimmer'/>
            <div className="card--stats">
                <img src={Star} className="card--star" alt='ratingStar'/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From {props.price}</span> / person</p>
        </div>
     );
}
 
export default Card;

