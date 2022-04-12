// Generated from ./Ex1.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { Ex1Listener } from "./Ex1Listener";
import { Ex1Visitor } from "./Ex1Visitor";


export class Ex1Parser extends Parser {
	public static readonly WS = 1;
	public static readonly NEWLINE = 2;
	public static readonly VARIABLE = 3;
	public static readonly ADD = 4;
	public static readonly SUB = 5;
	public static readonly MUL = 6;
	public static readonly DIV = 7;
	public static readonly REM = 8;
	public static readonly INT = 9;
	public static readonly FLOAT = 10;
	public static readonly STRING = 11;
	public static readonly BOOLEAN = 12;
	public static readonly LP = 13;
	public static readonly RP = 14;
	public static readonly EQ = 15;
	public static readonly SEMICOLON = 16;
	public static readonly INT_NUMBER = 17;
	public static readonly FLOAT_NUMBER = 18;
	public static readonly STRING_TEXT = 19;
	public static readonly TRUE = 20;
	public static readonly FALSE = 21;
	public static readonly OR = 22;
	public static readonly AND = 23;
	public static readonly NOT = 24;
	public static readonly RULE_start = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_type = 3;
	public static readonly RULE_value = 4;
	public static readonly RULE_expression = 5;
	public static readonly RULE_attribution = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "statement", "declaration", "type", "value", "expression", "attribution",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'+'", "'-'", "'*'", "'/'", 
		"'%'", "'int'", "'float'", "'string'", "'bool'", "'('", "')'", "'='", 
		"';'", undefined, undefined, undefined, "'true'", "'false'", "'||'", "'&&'", 
		"'!'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "NEWLINE", "VARIABLE", "ADD", "SUB", "MUL", "DIV", "REM", 
		"INT", "FLOAT", "STRING", "BOOLEAN", "LP", "RP", "EQ", "SEMICOLON", "INT_NUMBER", 
		"FLOAT_NUMBER", "STRING_TEXT", "TRUE", "FALSE", "OR", "AND", "NOT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Ex1Parser._LITERAL_NAMES, Ex1Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return Ex1Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Ex1.g4"; }

	// @Override
	public get ruleNames(): string[] { return Ex1Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return Ex1Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Ex1Parser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Ex1Parser.RULE_start);
		let _la: number;
		try {
			this.state = 35;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				_localctx = new MultilineProgContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 24;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Ex1Parser.VARIABLE) | (1 << Ex1Parser.INT) | (1 << Ex1Parser.FLOAT) | (1 << Ex1Parser.STRING) | (1 << Ex1Parser.BOOLEAN) | (1 << Ex1Parser.LP) | (1 << Ex1Parser.INT_NUMBER) | (1 << Ex1Parser.FLOAT_NUMBER) | (1 << Ex1Parser.STRING_TEXT) | (1 << Ex1Parser.TRUE) | (1 << Ex1Parser.FALSE) | (1 << Ex1Parser.NOT))) !== 0)) {
					{
					{
					this.state = 14;
					this.statement();
					this.state = 15;
					this.match(Ex1Parser.SEMICOLON);
					this.state = 19;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === Ex1Parser.NEWLINE) {
						{
						{
						this.state = 16;
						this.match(Ex1Parser.NEWLINE);
						}
						}
						this.state = 21;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 26;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				_localctx = new SinglelineProgContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 27;
				this.statement();
				this.state = 28;
				this.match(Ex1Parser.SEMICOLON);
				this.state = 32;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Ex1Parser.NEWLINE) {
					{
					{
					this.state = 29;
					this.match(Ex1Parser.NEWLINE);
					}
					}
					this.state = 34;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Ex1Parser.RULE_statement);
		try {
			this.state = 40;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				_localctx = new DeclarationRuleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 37;
				this.declaration();
				}
				break;

			case 2:
				_localctx = new ExpressionRuleContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 38;
				this.expression(0);
				}
				break;

			case 3:
				_localctx = new AttributionRuleContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 39;
				this.attribution();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Ex1Parser.RULE_declaration);
		try {
			_localctx = new VariableDeclarationContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.type();
			this.state = 43;
			this.match(Ex1Parser.VARIABLE);
			this.state = 44;
			this.match(Ex1Parser.EQ);
			this.state = 45;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Ex1Parser.RULE_type);
		try {
			this.state = 51;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Ex1Parser.INT:
				_localctx = new TypeIntContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 47;
				this.match(Ex1Parser.INT);
				}
				break;
			case Ex1Parser.FLOAT:
				_localctx = new TypeFloatContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 48;
				this.match(Ex1Parser.FLOAT);
				}
				break;
			case Ex1Parser.STRING:
				_localctx = new TypeStringContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 49;
				this.match(Ex1Parser.STRING);
				}
				break;
			case Ex1Parser.BOOLEAN:
				_localctx = new TypeBoolContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 50;
				this.match(Ex1Parser.BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Ex1Parser.RULE_value);
		try {
			this.state = 59;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Ex1Parser.INT_NUMBER:
				_localctx = new ValueIntContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 53;
				this.match(Ex1Parser.INT_NUMBER);
				}
				break;
			case Ex1Parser.FLOAT_NUMBER:
				_localctx = new ValueFloatContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 54;
				this.match(Ex1Parser.FLOAT_NUMBER);
				}
				break;
			case Ex1Parser.STRING_TEXT:
				_localctx = new ValueStringContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 55;
				this.match(Ex1Parser.STRING_TEXT);
				}
				break;
			case Ex1Parser.VARIABLE:
				_localctx = new ValueVariableContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 56;
				this.match(Ex1Parser.VARIABLE);
				}
				break;
			case Ex1Parser.TRUE:
				_localctx = new ValueTrueContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 57;
				this.match(Ex1Parser.TRUE);
				}
				break;
			case Ex1Parser.FALSE:
				_localctx = new ValueFlaseContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 58;
				this.match(Ex1Parser.FALSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, Ex1Parser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Ex1Parser.LP:
				{
				_localctx = new ExpressionParanthesisContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 62;
				this.match(Ex1Parser.LP);
				this.state = 63;
				this.expression(0);
				this.state = 64;
				this.match(Ex1Parser.RP);
				}
				break;
			case Ex1Parser.NOT:
				{
				_localctx = new ExpressionNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 66;
				this.match(Ex1Parser.NOT);
				this.state = 67;
				this.expression(2);
				}
				break;
			case Ex1Parser.VARIABLE:
			case Ex1Parser.INT_NUMBER:
			case Ex1Parser.FLOAT_NUMBER:
			case Ex1Parser.STRING_TEXT:
			case Ex1Parser.TRUE:
			case Ex1Parser.FALSE:
				{
				_localctx = new ExpressionValueContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 68;
				this.value();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 94;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 92;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionMultiplyContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionMultiplyContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, Ex1Parser.RULE_expression);
						this.state = 71;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 72;
						(_localctx as ExpressionMultiplyContext)._op = this.match(Ex1Parser.MUL);
						this.state = 73;
						(_localctx as ExpressionMultiplyContext)._right = this.expression(11);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionDivisionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionDivisionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, Ex1Parser.RULE_expression);
						this.state = 74;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 75;
						(_localctx as ExpressionDivisionContext)._op = this.match(Ex1Parser.DIV);
						this.state = 76;
						(_localctx as ExpressionDivisionContext)._right = this.expression(10);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionRemContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionRemContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, Ex1Parser.RULE_expression);
						this.state = 77;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 78;
						(_localctx as ExpressionRemContext)._op = this.match(Ex1Parser.REM);
						this.state = 79;
						(_localctx as ExpressionRemContext)._right = this.expression(9);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionAdditionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionAdditionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, Ex1Parser.RULE_expression);
						this.state = 80;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 81;
						(_localctx as ExpressionAdditionContext)._op = this.match(Ex1Parser.ADD);
						this.state = 82;
						(_localctx as ExpressionAdditionContext)._right = this.expression(8);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionSubtractionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionSubtractionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, Ex1Parser.RULE_expression);
						this.state = 83;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 84;
						(_localctx as ExpressionSubtractionContext)._op = this.match(Ex1Parser.SUB);
						this.state = 85;
						(_localctx as ExpressionSubtractionContext)._right = this.expression(7);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionAndContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionAndContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, Ex1Parser.RULE_expression);
						this.state = 86;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 87;
						(_localctx as ExpressionAndContext)._op = this.match(Ex1Parser.AND);
						this.state = 88;
						(_localctx as ExpressionAndContext)._right = this.expression(5);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionOrContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionOrContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, Ex1Parser.RULE_expression);
						this.state = 89;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 90;
						(_localctx as ExpressionOrContext)._op = this.match(Ex1Parser.OR);
						this.state = 91;
						(_localctx as ExpressionOrContext)._right = this.expression(4);
						}
						break;
					}
					}
				}
				this.state = 96;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribution(): AttributionContext {
		let _localctx: AttributionContext = new AttributionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Ex1Parser.RULE_attribution);
		try {
			_localctx = new VariableAttributionContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.match(Ex1Parser.VARIABLE);
			this.state = 98;
			this.match(Ex1Parser.EQ);
			this.state = 99;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 5:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 10);

		case 1:
			return this.precpred(this._ctx, 9);

		case 2:
			return this.precpred(this._ctx, 8);

		case 3:
			return this.precpred(this._ctx, 7);

		case 4:
			return this.precpred(this._ctx, 6);

		case 5:
			return this.precpred(this._ctx, 4);

		case 6:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1Ah\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x03\x02\x03\x02\x03\x02\x07\x02\x14\n\x02\f\x02\x0E\x02" +
		"\x17\v\x02\x07\x02\x19\n\x02\f\x02\x0E\x02\x1C\v\x02\x03\x02\x03\x02\x03" +
		"\x02\x07\x02!\n\x02\f\x02\x0E\x02$\v\x02\x05\x02&\n\x02\x03\x03\x03\x03" +
		"\x03\x03\x05\x03+\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x05\x056\n\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x05\x06>\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07H\n\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07" +
		"_\n\x07\f\x07\x0E\x07b\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x02\x02\x03" +
		"\f\t\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x02\x02\x02w\x02" +
		"%\x03\x02\x02\x02\x04*\x03\x02\x02\x02\x06,\x03\x02\x02\x02\b5\x03\x02" +
		"\x02\x02\n=\x03\x02\x02\x02\fG\x03\x02\x02\x02\x0Ec\x03\x02\x02\x02\x10" +
		"\x11\x05\x04\x03\x02\x11\x15\x07\x12\x02\x02\x12\x14\x07\x04\x02\x02\x13" +
		"\x12\x03\x02\x02\x02\x14\x17\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x15" +
		"\x16\x03\x02\x02\x02\x16\x19\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x18" +
		"\x10\x03\x02\x02\x02\x19\x1C\x03\x02\x02\x02\x1A\x18\x03\x02\x02\x02\x1A" +
		"\x1B\x03\x02\x02\x02\x1B&\x03\x02\x02\x02\x1C\x1A\x03\x02\x02\x02\x1D" +
		"\x1E\x05\x04\x03\x02\x1E\"\x07\x12\x02\x02\x1F!\x07\x04\x02\x02 \x1F\x03" +
		"\x02\x02\x02!$\x03\x02\x02\x02\" \x03\x02\x02\x02\"#\x03\x02\x02\x02#" +
		"&\x03\x02\x02\x02$\"\x03\x02\x02\x02%\x1A\x03\x02\x02\x02%\x1D\x03\x02" +
		"\x02\x02&\x03\x03\x02\x02\x02\'+\x05\x06\x04\x02(+\x05\f\x07\x02)+\x05" +
		"\x0E\b\x02*\'\x03\x02\x02\x02*(\x03\x02\x02\x02*)\x03\x02\x02\x02+\x05" +
		"\x03\x02\x02\x02,-\x05\b\x05\x02-.\x07\x05\x02\x02./\x07\x11\x02\x02/" +
		"0\x05\f\x07\x020\x07\x03\x02\x02\x0216\x07\v\x02\x0226\x07\f\x02\x023" +
		"6\x07\r\x02\x0246\x07\x0E\x02\x0251\x03\x02\x02\x0252\x03\x02\x02\x02" +
		"53\x03\x02\x02\x0254\x03\x02\x02\x026\t\x03\x02\x02\x027>\x07\x13\x02" +
		"\x028>\x07\x14\x02\x029>\x07\x15\x02\x02:>\x07\x05\x02\x02;>\x07\x16\x02" +
		"\x02<>\x07\x17\x02\x02=7\x03\x02\x02\x02=8\x03\x02\x02\x02=9\x03\x02\x02" +
		"\x02=:\x03\x02\x02\x02=;\x03\x02\x02\x02=<\x03\x02\x02\x02>\v\x03\x02" +
		"\x02\x02?@\b\x07\x01\x02@A\x07\x0F\x02\x02AB\x05\f\x07\x02BC\x07\x10\x02" +
		"\x02CH\x03\x02\x02\x02DE\x07\x1A\x02\x02EH\x05\f\x07\x04FH\x05\n\x06\x02" +
		"G?\x03\x02\x02\x02GD\x03\x02\x02\x02GF\x03\x02\x02\x02H`\x03\x02\x02\x02" +
		"IJ\f\f\x02\x02JK\x07\b\x02\x02K_\x05\f\x07\rLM\f\v\x02\x02MN\x07\t\x02" +
		"\x02N_\x05\f\x07\fOP\f\n\x02\x02PQ\x07\n\x02\x02Q_\x05\f\x07\vRS\f\t\x02" +
		"\x02ST\x07\x06\x02\x02T_\x05\f\x07\nUV\f\b\x02\x02VW\x07\x07\x02\x02W" +
		"_\x05\f\x07\tXY\f\x06\x02\x02YZ\x07\x19\x02\x02Z_\x05\f\x07\x07[\\\f\x05" +
		"\x02\x02\\]\x07\x18\x02\x02]_\x05\f\x07\x06^I\x03\x02\x02\x02^L\x03\x02" +
		"\x02\x02^O\x03\x02\x02\x02^R\x03\x02\x02\x02^U\x03\x02\x02\x02^X\x03\x02" +
		"\x02\x02^[\x03\x02\x02\x02_b\x03\x02\x02\x02`^\x03\x02\x02\x02`a\x03\x02" +
		"\x02\x02a\r\x03\x02\x02\x02b`\x03\x02\x02\x02cd\x07\x05\x02\x02de\x07" +
		"\x11\x02\x02ef\x05\f\x07\x02f\x0F\x03\x02\x02\x02\f\x15\x1A\"%*5=G^`";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Ex1Parser.__ATN) {
			Ex1Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Ex1Parser._serializedATN));
		}

		return Ex1Parser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Ex1Parser.RULE_start; }
	public copyFrom(ctx: StartContext): void {
		super.copyFrom(ctx);
	}
}
export class MultilineProgContext extends StartContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Ex1Parser.SEMICOLON);
		} else {
			return this.getToken(Ex1Parser.SEMICOLON, i);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Ex1Parser.NEWLINE);
		} else {
			return this.getToken(Ex1Parser.NEWLINE, i);
		}
	}
	constructor(ctx: StartContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterMultilineProg) {
			listener.enterMultilineProg(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitMultilineProg) {
			listener.exitMultilineProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitMultilineProg) {
			return visitor.visitMultilineProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SinglelineProgContext extends StartContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(Ex1Parser.SEMICOLON, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Ex1Parser.NEWLINE);
		} else {
			return this.getToken(Ex1Parser.NEWLINE, i);
		}
	}
	constructor(ctx: StartContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterSinglelineProg) {
			listener.enterSinglelineProg(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitSinglelineProg) {
			listener.exitSinglelineProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitSinglelineProg) {
			return visitor.visitSinglelineProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Ex1Parser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class DeclarationRuleContext extends StatementContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterDeclarationRule) {
			listener.enterDeclarationRule(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitDeclarationRule) {
			listener.exitDeclarationRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitDeclarationRule) {
			return visitor.visitDeclarationRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionRuleContext extends StatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionRule) {
			listener.enterExpressionRule(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionRule) {
			listener.exitExpressionRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionRule) {
			return visitor.visitExpressionRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AttributionRuleContext extends StatementContext {
	public attribution(): AttributionContext {
		return this.getRuleContext(0, AttributionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterAttributionRule) {
			listener.enterAttributionRule(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitAttributionRule) {
			listener.exitAttributionRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitAttributionRule) {
			return visitor.visitAttributionRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Ex1Parser.RULE_declaration; }
	public copyFrom(ctx: DeclarationContext): void {
		super.copyFrom(ctx);
	}
}
export class VariableDeclarationContext extends DeclarationContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public VARIABLE(): TerminalNode { return this.getToken(Ex1Parser.VARIABLE, 0); }
	public EQ(): TerminalNode { return this.getToken(Ex1Parser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Ex1Parser.RULE_type; }
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class TypeIntContext extends TypeContext {
	public INT(): TerminalNode { return this.getToken(Ex1Parser.INT, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterTypeInt) {
			listener.enterTypeInt(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitTypeInt) {
			listener.exitTypeInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitTypeInt) {
			return visitor.visitTypeInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeFloatContext extends TypeContext {
	public FLOAT(): TerminalNode { return this.getToken(Ex1Parser.FLOAT, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterTypeFloat) {
			listener.enterTypeFloat(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitTypeFloat) {
			listener.exitTypeFloat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitTypeFloat) {
			return visitor.visitTypeFloat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeStringContext extends TypeContext {
	public STRING(): TerminalNode { return this.getToken(Ex1Parser.STRING, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterTypeString) {
			listener.enterTypeString(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitTypeString) {
			listener.exitTypeString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitTypeString) {
			return visitor.visitTypeString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeBoolContext extends TypeContext {
	public BOOLEAN(): TerminalNode { return this.getToken(Ex1Parser.BOOLEAN, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterTypeBool) {
			listener.enterTypeBool(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitTypeBool) {
			listener.exitTypeBool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitTypeBool) {
			return visitor.visitTypeBool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Ex1Parser.RULE_value; }
	public copyFrom(ctx: ValueContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueIntContext extends ValueContext {
	public INT_NUMBER(): TerminalNode { return this.getToken(Ex1Parser.INT_NUMBER, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterValueInt) {
			listener.enterValueInt(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitValueInt) {
			listener.exitValueInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitValueInt) {
			return visitor.visitValueInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueFloatContext extends ValueContext {
	public FLOAT_NUMBER(): TerminalNode { return this.getToken(Ex1Parser.FLOAT_NUMBER, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterValueFloat) {
			listener.enterValueFloat(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitValueFloat) {
			listener.exitValueFloat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitValueFloat) {
			return visitor.visitValueFloat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueStringContext extends ValueContext {
	public STRING_TEXT(): TerminalNode { return this.getToken(Ex1Parser.STRING_TEXT, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterValueString) {
			listener.enterValueString(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitValueString) {
			listener.exitValueString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitValueString) {
			return visitor.visitValueString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueVariableContext extends ValueContext {
	public VARIABLE(): TerminalNode { return this.getToken(Ex1Parser.VARIABLE, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterValueVariable) {
			listener.enterValueVariable(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitValueVariable) {
			listener.exitValueVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitValueVariable) {
			return visitor.visitValueVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueTrueContext extends ValueContext {
	public TRUE(): TerminalNode { return this.getToken(Ex1Parser.TRUE, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterValueTrue) {
			listener.enterValueTrue(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitValueTrue) {
			listener.exitValueTrue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitValueTrue) {
			return visitor.visitValueTrue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueFlaseContext extends ValueContext {
	public FALSE(): TerminalNode { return this.getToken(Ex1Parser.FALSE, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterValueFlase) {
			listener.enterValueFlase(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitValueFlase) {
			listener.exitValueFlase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitValueFlase) {
			return visitor.visitValueFlase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Ex1Parser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ExpressionMultiplyContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MUL(): TerminalNode { return this.getToken(Ex1Parser.MUL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionMultiply) {
			listener.enterExpressionMultiply(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionMultiply) {
			listener.exitExpressionMultiply(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionMultiply) {
			return visitor.visitExpressionMultiply(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionDivisionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DIV(): TerminalNode { return this.getToken(Ex1Parser.DIV, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionDivision) {
			listener.enterExpressionDivision(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionDivision) {
			listener.exitExpressionDivision(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionDivision) {
			return visitor.visitExpressionDivision(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionRemContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public REM(): TerminalNode { return this.getToken(Ex1Parser.REM, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionRem) {
			listener.enterExpressionRem(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionRem) {
			listener.exitExpressionRem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionRem) {
			return visitor.visitExpressionRem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionAdditionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ADD(): TerminalNode { return this.getToken(Ex1Parser.ADD, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionAddition) {
			listener.enterExpressionAddition(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionAddition) {
			listener.exitExpressionAddition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionAddition) {
			return visitor.visitExpressionAddition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionSubtractionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SUB(): TerminalNode { return this.getToken(Ex1Parser.SUB, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionSubtraction) {
			listener.enterExpressionSubtraction(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionSubtraction) {
			listener.exitExpressionSubtraction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionSubtraction) {
			return visitor.visitExpressionSubtraction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionParanthesisContext extends ExpressionContext {
	public LP(): TerminalNode { return this.getToken(Ex1Parser.LP, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RP(): TerminalNode { return this.getToken(Ex1Parser.RP, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionParanthesis) {
			listener.enterExpressionParanthesis(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionParanthesis) {
			listener.exitExpressionParanthesis(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionParanthesis) {
			return visitor.visitExpressionParanthesis(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionAndContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(Ex1Parser.AND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionAnd) {
			listener.enterExpressionAnd(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionAnd) {
			listener.exitExpressionAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionAnd) {
			return visitor.visitExpressionAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionOrContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(Ex1Parser.OR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionOr) {
			listener.enterExpressionOr(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionOr) {
			listener.exitExpressionOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionOr) {
			return visitor.visitExpressionOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionNotContext extends ExpressionContext {
	public NOT(): TerminalNode { return this.getToken(Ex1Parser.NOT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionNot) {
			listener.enterExpressionNot(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionNot) {
			listener.exitExpressionNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionNot) {
			return visitor.visitExpressionNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionValueContext extends ExpressionContext {
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterExpressionValue) {
			listener.enterExpressionValue(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitExpressionValue) {
			listener.exitExpressionValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitExpressionValue) {
			return visitor.visitExpressionValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Ex1Parser.RULE_attribution; }
	public copyFrom(ctx: AttributionContext): void {
		super.copyFrom(ctx);
	}
}
export class VariableAttributionContext extends AttributionContext {
	public VARIABLE(): TerminalNode { return this.getToken(Ex1Parser.VARIABLE, 0); }
	public EQ(): TerminalNode { return this.getToken(Ex1Parser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: AttributionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: Ex1Listener): void {
		if (listener.enterVariableAttribution) {
			listener.enterVariableAttribution(this);
		}
	}
	// @Override
	public exitRule(listener: Ex1Listener): void {
		if (listener.exitVariableAttribution) {
			listener.exitVariableAttribution(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Ex1Visitor<Result>): Result {
		if (visitor.visitVariableAttribution) {
			return visitor.visitVariableAttribution(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


