const TokenType = {
  String: 'string',
  Integer: 'integer',
  Identifier: 'identifier'
}

class Token {
  constructor(type, value, line, column) {
    this.type = type;
    this.value = value;
    this.line = line;
    this.column = column;
  }
}
