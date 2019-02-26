import "./Gallery.css";
import React from "react";
import Gallery from 'react-photo-gallery';


const MyGallery = props => (
  <div className="gallery">

    <Gallery
      photos={[
        {
          id: 1,
          src: "https://s3-media1.fl.yelpcdn.com/bphoto/E8JpJ9GmxJKPsF-pTiNZfQ/o.jpg",
          width: 3,
          height: 4
        },
        {
          id: 2,
          src: "https://s3-media1.fl.yelpcdn.com/bphoto/2N0gxlzh7hj-DY36YBT6lw/o.jpg",
          width: 3,
          height: 4
        },
        {
          id: 3,
          src: "https://s3-media4.fl.yelpcdn.com/bphoto/exooyaARRZHYOCSqrkCZFA/o.jpg",
          width: 3,
          height: 2
        },
        {
          id: 4,
          src: "https://s3-media2.fl.yelpcdn.com/bphoto/jUyFFG1G9IPZzX4Wr11N9w/o.jpg",
          width: 3,
          height: 3
        },
        {
          id: 5,
          src: "https://s3-media3.fl.yelpcdn.com/bphoto/0L0awkglDKfEluFIf7Etrw/o.jpg",
          width: 8,
          height: 6
        },
        {
          id: 6,
          src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/13240001_1716932828558316_1990159344087873068_n.jpg?_nc_cat=107&_nc_ht=scontent-iad3-1.xx&oh=ed6555deafdf43c4592751234570bf7f&oe=5D1B84A0",
          width: 3,
          height: 2
        },
        {
          id: 7,
          src: "https://s3-media3.fl.yelpcdn.com/bphoto/_dqs3OBwck6VrT3T5XFrjw/o.jpg",
          width: 3,
          height: 2
        },
        {
          id: 8,
          src: "https://s3-media2.fl.yelpcdn.com/bphoto/zFAns6z4VpfiMDqmLAARqw/o.jpg",
          width: 3,
          height: 5
        },
        {
          id: 9,
          src: "https://s3-media1.fl.yelpcdn.com/bphoto/7ufJFQfCSsB53j-Ka0GxbA/o.jpg",
          width: 3,
          height: 2
        },
        {
          id: 10,
          src: "https://s3-media3.fl.yelpcdn.com/bphoto/Bhn9gu74SmodUARjb2Nqpg/o.jpg",
          width: 3,
          height: 2
        },
        {
          id: 11,
          src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/1560702_1524961081088826_7066353169226616043_n.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=fa37e4ab02da957fa67f873b08497734&oe=5CDC3483",
          width: 5,
          height: 5
        },
        {
          id: 12,
          src: "https://s3-media3.fl.yelpcdn.com/bphoto/HGhkWvD1hRCZTj3ZH_f6uA/o.jpg",
          width: 3,
          height: 2
        },

      ]
      }


    />
  </div>
);


export default MyGallery;
// End of Gallery