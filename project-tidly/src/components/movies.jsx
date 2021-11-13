import React, { Component } from 'react';
import { getMovies} from '../services/fakeMovieService';

class Movies extends React.Component {
    state={
        movies:getMovies()
    };

    // Handling Delete
    handleDelete = (movie)=>{
        //contain all movie except clicked movies
        const movies =this.state.movies.filter(m => m._id !== movie._id);
        //in modern js if key==value so
        //Also this.setState({movies:movies})
        this.setState({movies})
    };
    render() { 
        const{ length :count}=this.state.movies;
        if(count ===0)
        return <p>There are no movies in Database</p>
       
        
        return (
<React.Fragment>
<p>Showing {count} movies in database.</p>
{/* //table.table>thead>tr>th*4 --gen coding */}
<table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    {/* empty for delete */}
                    <th></th> 
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie =>  
                     <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>

                    {/* Deletion */}
                    <td><button onClick={() =>this.handleDelete (movie)} className="btn btn-danger btn-sm">Delete</button></td>
                </tr>)}
             
            </tbody>
        </table>


</React.Fragment>
        );
    }
}
 
export default Movies ;