import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    size: {
        width: 300,
        height: 500,
        objectFit: "cover"
    },
    wrapper: {
        margin: '30px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }
})

function ImageResult({ images }) {
    const photo = images;
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            {
                photo.map((i) => {
                    return (
                        <div key={i.id}>
                            <img src={i.largeImageURL} className={classes.size} alt="not found" />
                            {/* <p>{i.tags}</p> */}
                        </div>
                    )
                })
            }
        </div >
    )
}


export default ImageResult;

