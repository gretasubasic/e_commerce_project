import React, {useState} from 'react'
import styled from 'styled-components'

const ProductImages = ({images = [{url: ""}] }) => {
    
    const [main, setMain] = useState(images[0])
    console.log(images)
    return (
        <Wrapper>
            <img src={main.url} alt="main-img" className="main" />
            <div className="gallery">
                {images.map((image, index) => {
                   const {id, url, fileName} = image;
                   return <img src={url} alt={fileName} key={index} onClick={()=> setMain(images[index])}
                   className={`${image.url === main.url ? "active" : null}`}
                   
                   />
                })}

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`


.main {
    height: 600px;
    
}
img {
    width: 100%;
    display: block;
    border-radius: 2px;
    object-fit: cover;
}

.gallery {
    margin-top: 1rem;
    display: grid;
    
    img {
      height: 60px;
      cursor: pointer;
    }
    
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
   
   
}

.active {
    border: 2px solid white;
}
`

export default ProductImages
