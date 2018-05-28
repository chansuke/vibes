const TokenType = {
  String: 'string',
  Integer: 'integer',
  Identifier: 'identifier'
}

class Token {
  type: string
  value: string
  line: number
  column: string

  constructor(type: string, value: string, line: number, column: string) {
    this.type = type
    this.value = value
    this.line = line
    this.column = column
  }
}

export default Token
