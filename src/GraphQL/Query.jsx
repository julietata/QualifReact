import {gql} from '@apollo/client'

export const LOAD_POKEMONS = gql`
    query getAllPokemons {
        pokemons {
            results {
                id
                name
                image
            }
        }
    }
`

export const SEARCH_POKEMON = gql`
    query pokemon($n: String!) {
        pokemon(name: $n) {
            id
            name
            abilities {
                ability {
                    name
                }
            }
            moves {
                move {
                    name
                }
            }
            types {
                type {
                    name
                }
            }
            message
            status
            sprites {
                front_default
            }
        }
    }
`