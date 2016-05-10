import { connect } from 'react-redux'
import { removeTodo } from '../actions'
import Footer from '../components/Footer'

const mapStateToProps = (state) => {
   return {
     selected: state.todos.selected
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
     onClick: () => {
       dispatch(removeSelected (...selected)) // ids selected checkboxes
       console.log("selected")
     }
   }
}

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default FooterContainer
