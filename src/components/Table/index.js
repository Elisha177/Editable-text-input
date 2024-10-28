/* eslint-disable react/no-unused-state */
import {Component} from 'react'

import {
  MainContainer,
  CardContainer,
  Heading,
  InputElement,
  ParagraphText,
  InputField,
  ButtonElement,
} from './styledComponents'

class Table extends Component {
  state = {
    editText: '', // Renamed to follow camelCase convention
    isButtonClicked: false,
  }

  // Update the editText state when input changes
  onChangeButtonEvent = event => {
    this.setState({editText: event.target.value})
  }

  // Toggle isButtonClicked state
  onButtonClicked = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {editText, isButtonClicked} = this.state

    // Toggle button text between Edit and Save
    const editOrSaveButton = isButtonClicked ? 'Edit' : 'Save'

    return (
      <MainContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <InputElement>
            {isButtonClicked ? (
              // Display paragraph text when button clicked
              <ParagraphText>{editText}</ParagraphText>
            ) : (
              // Display input field when button not clicked
              <InputField
                type="text"
                value={editText}
                onChange={this.onChangeButtonEvent}
              />
            )}
            <ButtonElement onClick={this.onButtonClicked}>
              {editOrSaveButton}
            </ButtonElement>
          </InputElement>
        </CardContainer>
      </MainContainer>
    )
  }
}

export default Table
