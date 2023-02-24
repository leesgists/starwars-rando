import React from 'react';

class FilmItemRow extends React.Component {
    render(){
        return(
            <li>
                <a href={this.props.url} className="App-link">{this.props.url}</a>
            </li>
        )
    }
}

class StarWars extends React.Component {

    constructor(){
        super()
        this.state = {
            loadedCharacter: false,
            name: null,
            height: null,
            homeworldLink: null,
            homeworld: null,
            films: []
        }
    }

    getRandomCharacter(){

        const randomNumber = Math.round( Math.random() * 82 )
        const url = `https://swapi.dev/api/people/${randomNumber}`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('people',data)

            fetch(data.homeworld)
            .then(response => response.json())
            .then(homeworld => {
                console.log('planet',homeworld)

                this.setState({
                    name: data.name,
                    height: data.height,
                    homeworldLink: data.homeworld,
                    homeworld: homeworld.name,
                    films: data.films,
                    loadedCharacter: true
                })
            })
        });

    }

    render(){

        const movies = this.state.films.map((url,i) => {
           return <FilmItemRow key={i} url={url}/>
        });

        return(
        <div>
            <h1>This is StarWars</h1>

            {
                this.state.loadedCharacter &&

                <div>
                    <h3>{this.state.name} </h3>
                    <p>{this.state.height} cm</p>
                    <p><a href={this.state.homeworldLink} target="_blank" className="App-link">{this.state.homeworld}</a></p>
                    <ul>
                        {movies}
                        {/* {
                            this.state.films.map(film => {
                                return <li> {film} </li>
                            })
                        } */}
                    </ul>
                </div>
            }


            <button 
            type="button" 
            onClick={ () => this.getRandomCharacter() } 
            className="btn">
                Gimme a Star
            </button>
        </div>
        )
    }
}

export default StarWars;