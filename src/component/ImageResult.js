import React from 'react'
// import PropTypes from 'prop-types';
// import { GridList, GridTitle } from "material-ui/GridList";
import { Dialog, IconButton, makeStyles } from '@material-ui/core';
// import ZoomIn from "material-ui/svg-icons/action/zoom-in";
// import FlatButton from "material-ui/FlatButton";

const useStyles = makeStyles({
    size: {
        width: 300,
        height: 500,
        objectFit:"cover"
    },
    wrapper: {
        margin:'30px 60px',
        display: 'flex',
        justifyContent:'space-between',
        flexWrap: 'wrap'
    }
})

function ImageResult({ images }) {
    let imageListContent;
    const photo = images;
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            {
                photo.map((i) => {
                    return (
                        <div key={i.id}>
                            <img src={i.largeImageURL} className={classes.size} />
                            {/* <p>{i.tags}</p> */}
                        </div>
                    )
                })
            }
        </div >
    )
}

// ImageResult.PropTypes = {
//      images: PropTypes.array.isRequired
// }

export default ImageResult;

