import { connect } from 'react-redux'
import { setPersonName } from '../actions'
import { Button } from '../components/Button'

const getRandomName = () => {
  const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const getChar = () => alphabets.charAt(
    Math.floor( Math.random()*alphabets.length )
  )
  return [...Array(5)].map(getChar).join('')
}

const mapStateToProps = (state, ownProps) => {
  return state
}

const mapDispatchToProps = {
  onClick: () => setPersonName(getRandomName())
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)