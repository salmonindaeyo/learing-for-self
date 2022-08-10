import './TattooItem.css'
function tattooItem(props) {

      const {tattoo } = props;

    return (
            <div className='tattoo-item'>
              <img src={tattoo.thumbnailUrl} />
              <h4> {tattoo.title} </h4>
            </div>
    )
    
}

export default tattooItem;