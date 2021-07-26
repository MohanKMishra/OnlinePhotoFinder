import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import axios from "axios";
import ImageResult from './ImageResult';


class Search extends Component {
    state = {
        searchText: '',
        amount: 200,
        apiUrl: 'https://pixabay.com/api/',
        apiKey: '22642612-9417d13a8a318dd0af082f816',
        images: []
    }
    onTextChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`).then(
                res => this.setState({ images: res.data.hits })).
                catch(err => console.log(err));
        });
    }
    onAmoutChanges = (e, index, value) => this.setState({ amount: value })
    render() {
        console.log(this.state.images);
        return (
            <div>
                <TextField
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Search for Images"
                    fullWidth={true}
                />
                <br />
                {/* <Select
                    name="amount"
                    floatingLabelText="Amount"
                    value={this.state.amount}
                    onChange={this.onAmoutChange}
                >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                </Select>
                <br /> */}
                {this.state.images.length > 0 ? (<ImageResult images={this.state.images} />) : null}
            </div>
        )
    }
}

export default Search;