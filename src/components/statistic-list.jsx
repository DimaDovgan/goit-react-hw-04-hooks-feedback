
import { nanoid } from 'nanoid'
import PropTypes from "prop-types";

export const Statistics = (props) => { 

    let elems = Object.entries(props)
    return <ul>{elems.map(elem=><li key={nanoid()}>{elem[0]}:{elem[1]}</li>) }</ul>

}
Statistics.propTypes = PropTypes.object.isRequired;
