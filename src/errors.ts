import { Node } from 'estree';

export class BaseErrorMessage {
  public message: string
  public type: string
  constructor(msg: string = '') {
    this.type = this?.constructor?.name || 'BaseError';
    this.message = msg;
  }
}

export class NotSupportErrorMessage extends BaseErrorMessage {

  public node: Node;

  constructor(node: Node, type: string = node.type) {
    super(`not support syntax '${type}', start at line: ${node.loc.start.line} col: ${node.loc.start.column}, end at line: ${node.loc.end.line} col: ${node.loc.end.column}.`);
    this.node = node;
  }

}


export class InfiniteLoopErrorMessage extends BaseErrorMessage {

  public node: Node;

  constructor(node: Node) {
    super(`infinite loop found, start at line: ${node.loc.start.line} col: ${node.loc.start.column}, end at line: ${node.loc.end.line} col: ${node.loc.end.column}.`);
    this.node = node;
  }

}

export class ParsingErrorMessage extends BaseErrorMessage {

  constructor(error: any) {
    super(error.message);
  }
}