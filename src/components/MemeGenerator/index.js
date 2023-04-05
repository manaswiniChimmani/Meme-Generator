import {Component} from 'react'

// import styledComponents from './styledComponents'

// import {MemeContainer, Form, Heading, Label, Bg2, Text, Button} from './styledComponents'

import {
  Container,
  GeneratorContainer,
  Heading,
  MemeForm,
  Label,
  Input,
  Select,
  Option,
  GenerateBtn,
  FormContainer,
  BgImgContainer,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    inputImgUrl: '',
    topInput: '',
    bottomInput: '',
    fontSize: fontSizesOptionsList[0].optionId,
    isGenerate: false,
  }

  onBackgroundImg = event => {
    this.setState({inputImgUrl: event.target.value})
  }

  onTopInput = event => {
    this.setState({topInput: event.target.value})
  }

  onBottomInput = event => {
    this.setState({bottomInput: event.target.value})
  }

  onFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {isGenerate} = this.state

    this.setState({isGenerate: true})
  }

  render() {
    const {
      fontSize,
      inputImgUrl,
      topInput,
      bottomInput,
      isGenerate,
    } = this.state

    return (
      <Container>
        <GeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormContainer>
            <MemeForm onSubmit={this.onGenerateMeme}>
              <Label htmlFor="bgImg">Image URL</Label>
              <Input
                type="text"
                id="bgImg"
                value={inputImgUrl}
                onChange={this.onBackgroundImg}
                placeholder="Enter the Image URL"
              />
              <Label htmlFor="topText">Top Text</Label>
              <Input
                type="text"
                id="topText"
                value={topInput}
                onChange={this.onTopInput}
                placeholder="Enter the Top Text"
              />
              <Label htmlFor="topText">Bottom Text</Label>
              <Input
                type="text"
                id="bottomText"
                value={bottomInput}
                onChange={this.onBottomInput}
                placeholder="Enter the Bottom Text"
              />
              <Label htmlFor="select">Font Size</Label>
              <Select id="select" value={fontSize} onChange={this.onFontSize}>
                {fontSizesOptionsList.map(eachOption => (
                  <Option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </Option>
                ))}
              </Select>
              <GenerateBtn type="submit">Generate</GenerateBtn>
            </MemeForm>
            {isGenerate && (
              <BgImgContainer data-testid="meme" backgroundImage={inputImgUrl}>
                <Text fontSize={fontSize}>{topInput}</Text>
                <Text fontSize={fontSize}>{bottomInput}</Text>
              </BgImgContainer>
            )}
          </FormContainer>
        </GeneratorContainer>
      </Container>
    )
  }
}
export default MemeGenerator
