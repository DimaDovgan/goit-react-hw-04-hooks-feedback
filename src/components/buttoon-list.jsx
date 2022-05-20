
import { nanoid } from 'nanoid'
import PropTypes from "prop-types";
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
        return <ul>{options.map((elem) => {
            return <li key={nanoid()}><button type="button" name={elem} onClick={onLeaveFeedback}>{elem}</button></li>
        })}</ul>

}
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback:PropTypes.func.isRequired
}