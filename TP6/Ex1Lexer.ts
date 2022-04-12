// Generated from ./Ex1.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class Ex1Lexer extends Lexer {
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
	public static readonly LP = 12;
	public static readonly RP = 13;
	public static readonly EQ = 14;
	public static readonly SEMICOLON = 15;
	public static readonly INT_NUMBER = 16;
	public static readonly FLOAT_NUMBER = 17;
	public static readonly STRING_TEXT = 18;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"WS", "NEWLINE", "VARIABLE", "ADD", "SUB", "MUL", "DIV", "REM", "INT", 
		"FLOAT", "STRING", "LP", "RP", "EQ", "SEMICOLON", "INT_NUMBER", "FLOAT_NUMBER", 
		"STRING_TEXT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'+'", "'-'", "'*'", "'/'", 
		"'%'", "'int'", "'float'", "'string'", "'('", "')'", "'='", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "NEWLINE", "VARIABLE", "ADD", "SUB", "MUL", "DIV", "REM", 
		"INT", "FLOAT", "STRING", "LP", "RP", "EQ", "SEMICOLON", "INT_NUMBER", 
		"FLOAT_NUMBER", "STRING_TEXT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Ex1Lexer._LITERAL_NAMES, Ex1Lexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return Ex1Lexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(Ex1Lexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Ex1.g4"; }

	// @Override
	public get ruleNames(): string[] { return Ex1Lexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return Ex1Lexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return Ex1Lexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return Ex1Lexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x14{\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x06\x03-\n\x03" +
		"\r\x03\x0E\x03.\x03\x03\x03\x03\x03\x04\x03\x04\x06\x045\n\x04\r\x04\x0E" +
		"\x046\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
		"\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x06\x11]\n\x11\r\x11\x0E\x11^\x03" +
		"\x12\x06\x12b\n\x12\r\x12\x0E\x12c\x03\x12\x03\x12\x06\x12h\n\x12\r\x12" +
		"\x0E\x12i\x03\x13\x03\x13\x06\x13n\n\x13\r\x13\x0E\x13o\x03\x13\x03\x13" +
		"\x03\x13\x06\x13u\n\x13\r\x13\x0E\x13v\x03\x13\x05\x13z\n\x13\x02\x02" +
		"\x02\x14\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02" +
		"\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02" +
		"\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\x03\x02\x07\x04" +
		"\x02\f\f\x0F\x0F\x05\x022;C\\c|\x03\x022;\x03\x02$$\x03\x02))\x02\x82" +
		"\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02" +
		"\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02" +
		"\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02" +
		"\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02" +
		"\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02" +
		"!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x03\'\x03" +
		"\x02\x02\x02\x05,\x03\x02\x02\x02\x072\x03\x02\x02\x02\t8\x03\x02\x02" +
		"\x02\v:\x03\x02\x02\x02\r<\x03\x02\x02\x02\x0F>\x03\x02\x02\x02\x11@\x03" +
		"\x02\x02\x02\x13B\x03\x02\x02\x02\x15F\x03\x02\x02\x02\x17L\x03\x02\x02" +
		"\x02\x19S\x03\x02\x02\x02\x1BU\x03\x02\x02\x02\x1DW\x03\x02\x02\x02\x1F" +
		"Y\x03\x02\x02\x02!\\\x03\x02\x02\x02#a\x03\x02\x02\x02%y\x03\x02\x02\x02" +
		"\'(\x07\"\x02\x02()\x03\x02\x02\x02)*\b\x02\x02\x02*\x04\x03\x02\x02\x02" +
		"+-\t\x02\x02\x02,+\x03\x02\x02\x02-.\x03\x02\x02\x02.,\x03\x02\x02\x02" +
		"./\x03\x02\x02\x02/0\x03\x02\x02\x0201\b\x03\x02\x021\x06\x03\x02\x02" +
		"\x0224\x07a\x02\x0235\t\x03\x02\x0243\x03\x02\x02\x0256\x03\x02\x02\x02" +
		"64\x03\x02\x02\x0267\x03\x02\x02\x027\b\x03\x02\x02\x0289\x07-\x02\x02" +
		"9\n\x03\x02\x02\x02:;\x07/\x02\x02;\f\x03\x02\x02\x02<=\x07,\x02\x02=" +
		"\x0E\x03\x02\x02\x02>?\x071\x02\x02?\x10\x03\x02\x02\x02@A\x07\'\x02\x02" +
		"A\x12\x03\x02\x02\x02BC\x07k\x02\x02CD\x07p\x02\x02DE\x07v\x02\x02E\x14" +
		"\x03\x02\x02\x02FG\x07h\x02\x02GH\x07n\x02\x02HI\x07q\x02\x02IJ\x07c\x02" +
		"\x02JK\x07v\x02\x02K\x16\x03\x02\x02\x02LM\x07u\x02\x02MN\x07v\x02\x02" +
		"NO\x07t\x02\x02OP\x07k\x02\x02PQ\x07p\x02\x02QR\x07i\x02\x02R\x18\x03" +
		"\x02\x02\x02ST\x07*\x02\x02T\x1A\x03\x02\x02\x02UV\x07+\x02\x02V\x1C\x03" +
		"\x02\x02\x02WX\x07?\x02\x02X\x1E\x03\x02\x02\x02YZ\x07=\x02\x02Z \x03" +
		"\x02\x02\x02[]\t\x04\x02\x02\\[\x03\x02\x02\x02]^\x03\x02\x02\x02^\\\x03" +
		"\x02\x02\x02^_\x03\x02\x02\x02_\"\x03\x02\x02\x02`b\t\x04\x02\x02a`\x03" +
		"\x02\x02\x02bc\x03\x02\x02\x02ca\x03\x02\x02\x02cd\x03\x02\x02\x02de\x03" +
		"\x02\x02\x02eg\x070\x02\x02fh\t\x04\x02\x02gf\x03\x02\x02\x02hi\x03\x02" +
		"\x02\x02ig\x03\x02\x02\x02ij\x03\x02\x02\x02j$\x03\x02\x02\x02km\x07$" +
		"\x02\x02ln\n\x05\x02\x02ml\x03\x02\x02\x02no\x03\x02\x02\x02om\x03\x02" +
		"\x02\x02op\x03\x02\x02\x02pq\x03\x02\x02\x02qz\x07$\x02\x02rt\x07)\x02" +
		"\x02su\n\x06\x02\x02ts\x03\x02\x02\x02uv\x03\x02\x02\x02vt\x03\x02\x02" +
		"\x02vw\x03\x02\x02\x02wx\x03\x02\x02\x02xz\x07)\x02\x02yk\x03\x02\x02" +
		"\x02yr\x03\x02\x02\x02z&\x03\x02\x02\x02\v\x02.6^ciovy\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Ex1Lexer.__ATN) {
			Ex1Lexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Ex1Lexer._serializedATN));
		}

		return Ex1Lexer.__ATN;
	}

}

