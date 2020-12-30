import React, {Component} from 'react'

class ListMovieViewers extends Component {
  render(){
    console.log(this.props.profiles);
    return ( 
      <ol className="movie-list">
        {this.props.profiles.map((profile) => (
			<li className="movie-list-item" key={profile.userID}>
					{`${this.props.users[profile.userID].name}'s favorite movie is 
  					${this.props.movies[profile.favoriteMovieID].name} `} 
			</li>
      	))}
      </ol>
    );
  }
}

export default ListMovieViewers;