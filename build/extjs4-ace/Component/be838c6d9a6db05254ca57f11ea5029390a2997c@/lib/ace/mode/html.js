require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/c371cd05c8df40c0af3b1515b808c9d737b98b02@/package.json'), [], function() { return {"uid":"http://github.com/cadorn/ace-extjs/packages/extjs4-ace/","name":"extjs4-ace","main":"lib/component.js","contexts":{"top":{"/lib/component":{"load":{"github.com/cadorn/ace-extjs/packages/extjs-ace/":{"parent":"github.com/cadorn/ace-extjs/packages/extjs4-ace/","load":{"github.com/cadorn/ace-extjs/packages/ace-editor/":{"parent":"github.com/cadorn/ace-extjs/packages/extjs-ace/@/","include":["github.com/ajaxorg/pilot/@/lib/pilot/index","github.com/ajaxorg/ace/@/lib/ace/defaults","github.com/ajaxorg/cockpit/@/lib/cockpit/index","github.com/ajaxorg/ace/@/lib/ace/range","github.com/ajaxorg/ace/@/lib/ace/tokenizer","github.com/ajaxorg/ace/@/lib/ace/mode/text","github.com/ajaxorg/ace/@/lib/ace/mode/matching_brace_outdent","github.com/ajaxorg/ace/@/lib/ace/mode/doc_comment_highlight_rules"],"load":{"github.com/ajaxorg/ace/":{"parent":"github.com/cadorn/ace-extjs/packages/ace-editor/@/main","include":["github.com/ajaxorg/ace/@/lib/ace/range","github.com/ajaxorg/ace/@/lib/ace/tokenizer","github.com/ajaxorg/ace/@/lib/ace/mode/text","github.com/ajaxorg/ace/@/lib/ace/mode/matching_brace_outdent","github.com/ajaxorg/ace/@/lib/ace/mode/doc_comment_highlight_rules"],"load":{"github.com/ajaxorg/ace/@/lib/ace/mode/*":{"parent":"github.com/ajaxorg/ace/@/","parents":{"github.com/ajaxorg/ace/@/":["github.com/ajaxorg/ace/@/lib/ace/range","github.com/ajaxorg/ace/@/lib/ace/tokenizer","github.com/ajaxorg/ace/@/lib/ace/mode/text","github.com/ajaxorg/ace/@/lib/ace/mode/matching_brace_outdent","github.com/ajaxorg/ace/@/lib/ace/mode/doc_comment_highlight_rules"],"github.com/cadorn/ace-extjs/packages/ace-editor/@/main":["github.com/ajaxorg/pilot/@/lib/pilot/index","github.com/ajaxorg/ace/@/lib/ace/defaults","github.com/ajaxorg/cockpit/@/lib/cockpit/index","github.com/ajaxorg/ace/@/lib/ace/range","github.com/ajaxorg/ace/@/lib/ace/tokenizer","github.com/ajaxorg/ace/@/lib/ace/mode/text","github.com/ajaxorg/ace/@/lib/ace/mode/matching_brace_outdent","github.com/ajaxorg/ace/@/lib/ace/mode/doc_comment_highlight_rules"],"github.com/cadorn/ace-extjs/packages/extjs-ace/@/":[],"github.com/cadorn/ace-extjs/packages/extjs4-ace/":[]}},"github.com/ajaxorg/ace/@/lib/ace/theme/*":{"parent":"github.com/ajaxorg/ace/@/","parents":{"github.com/ajaxorg/ace/@/":["github.com/ajaxorg/ace/@/lib/ace/range","github.com/ajaxorg/ace/@/lib/ace/tokenizer","github.com/ajaxorg/ace/@/lib/ace/mode/text","github.com/ajaxorg/ace/@/lib/ace/mode/matching_brace_outdent","github.com/ajaxorg/ace/@/lib/ace/mode/doc_comment_highlight_rules"],"github.com/cadorn/ace-extjs/packages/ace-editor/@/main":["github.com/ajaxorg/pilot/@/lib/pilot/index","github.com/ajaxorg/ace/@/lib/ace/defaults","github.com/ajaxorg/cockpit/@/lib/cockpit/index","github.com/ajaxorg/ace/@/lib/ace/range","github.com/ajaxorg/ace/@/lib/ace/tokenizer","github.com/ajaxorg/ace/@/lib/ace/mode/text","github.com/ajaxorg/ace/@/lib/ace/mode/matching_brace_outdent","github.com/ajaxorg/ace/@/lib/ace/mode/doc_comment_highlight_rules"],"github.com/cadorn/ace-extjs/packages/extjs-ace/@/":[],"github.com/cadorn/ace-extjs/packages/extjs4-ace/":[]}}},"id":"github.com/ajaxorg/ace/@/","ignore":true,"parents":{"github.com/cadorn/ace-extjs/packages/ace-editor/@/main":["github.com/ajaxorg/pilot/@/lib/pilot/index","github.com/ajaxorg/ace/@/lib/ace/defaults","github.com/ajaxorg/cockpit/@/lib/cockpit/index","github.com/ajaxorg/ace/@/lib/ace/range","github.com/ajaxorg/ace/@/lib/ace/tokenizer","github.com/ajaxorg/ace/@/lib/ace/mode/text","github.com/ajaxorg/ace/@/lib/ace/mode/matching_brace_outdent","github.com/ajaxorg/ace/@/lib/ace/mode/doc_comment_highlight_rules"],"github.com/cadorn/ace-extjs/packages/extjs-ace/@/":[],"github.com/cadorn/ace-extjs/packages/extjs4-ace/":[]}}},"id":"github.com/cadorn/ace-extjs/packages/ace-editor/@/main","parents":{"github.com/cadorn/ace-extjs/packages/extjs-ace/@/":[],"github.com/cadorn/ace-extjs/packages/extjs4-ace/":[]}}},"id":"github.com/cadorn/ace-extjs/packages/extjs-ace/@/","ignore":true,"parents":{"github.com/cadorn/ace-extjs/packages/extjs4-ace/":[]}}},"id":"github.com/cadorn/ace-extjs/packages/extjs4-ace/@/lib/component","parents":{}}}},"mappings":{"extjs-ace":{"location":"" + bravojs.mainModuleDir + "/aae9e0c4eed45f3c888f8e7824a96a83f5f8f861"},"ace":{"location":"" + bravojs.mainModuleDir + "/be838c6d9a6db05254ca57f11ea5029390a2997c"},"cockpit":{"location":"" + bravojs.mainModuleDir + "/539c1b401b1ed3c4feb4e16c715a1e9fd4289992"},"pilot":{"location":"" + bravojs.mainModuleDir + "/ebd88462734df1207a34b544b42917b1f1f52813"}}}; });
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/c371cd05c8df40c0af3b1515b808c9d737b98b02@/lib/component'), ['extjs-ace/component'], function (require, exports, module)
{
    var COMPONENT = require("extjs-ace/component");

    exports.main = function()
    {
        COMPONENT.init();
        
        var component = COMPONENT.getComponent();

        component.extend = "Ext.AbstractComponent";

        Ext.define("Ext.ux.AceEditor", component);
    }
});
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/be838c6d9a6db05254ca57f11ea5029390a2997c@/lib/ace/mode/html'), ['pilot/oop','ace/mode/text','ace/mode/javascript','ace/mode/css','ace/tokenizer','ace/mode/html_highlight_rules'], function (require, exports, module) {


var oop = require("pilot/oop");
var TextMode = require("ace/mode/text").Mode;
var JavaScriptMode = require("ace/mode/javascript").Mode;
var CssMode = require("ace/mode/css").Mode;
var Tokenizer = require("ace/tokenizer").Tokenizer;
var HtmlHighlightRules = require("ace/mode/html_highlight_rules").HtmlHighlightRules;

var Mode = function() {
    this.$tokenizer = new Tokenizer(new HtmlHighlightRules().getRules());

    this.$js = new JavaScriptMode();
    this.$css = new CssMode();
};
oop.inherits(Mode, TextMode);

(function() {

    this.toggleCommentLines = function(state, doc, startRow, endRow) {
        this.$delegate("toggleCommentLines", arguments, function() {
            return 0;
        });
    };

    this.getNextLineIndent = function(state, line, tab) {
        var self = this;
        return this.$delegate("getNextLineIndent", arguments, function() {
            return self.$getIndent(line);
        });
    };

    this.checkOutdent = function(state, line, input) {
        return this.$delegate("checkOutdent", arguments, function() {
            return false;
        });
    };

    this.autoOutdent = function(state, doc, row) {
        this.$delegate("autoOutdent", arguments);
    };

    this.$delegate = function(method, args, defaultHandler) {
        var state = args[0];
        var split = state.split("js-");

        if (!split[0] && split[1]) {
            args[0] = split[1];
            return this.$js[method].apply(this.$js, args);
        }

        var split = state.split("css-");
        if (!split[0] && split[1]) {
            args[0] = split[1];
            return this.$css[method].apply(this.$css, args);
        }

        return defaultHandler ? defaultHandler() : undefined;
    };

}).call(Mode.prototype);

exports.Mode = Mode;
});
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/be838c6d9a6db05254ca57f11ea5029390a2997c@/lib/ace/mode/javascript'), ['pilot/oop','ace/mode/text','ace/tokenizer','ace/mode/javascript_highlight_rules','ace/mode/matching_brace_outdent','ace/range','ace/worker/worker_client'], function (require, exports, module) {


var oop = require("pilot/oop");
var TextMode = require("ace/mode/text").Mode;
var Tokenizer = require("ace/tokenizer").Tokenizer;
var JavaScriptHighlightRules = require("ace/mode/javascript_highlight_rules").JavaScriptHighlightRules;
var MatchingBraceOutdent = require("ace/mode/matching_brace_outdent").MatchingBraceOutdent;
var Range = require("ace/range").Range;
var WorkerClient = require("ace/worker/worker_client").WorkerClient;

var Mode = function() {
    this.$tokenizer = new Tokenizer(new JavaScriptHighlightRules().getRules());
    this.$outdent = new MatchingBraceOutdent();
};
oop.inherits(Mode, TextMode);

(function() {

    this.toggleCommentLines = function(state, doc, startRow, endRow) {
        var outdent = true;
        var outentedRows = [];
        var re = /^(\s*)\/\//;

        for (var i=startRow; i<= endRow; i++) {
            if (!re.test(doc.getLine(i))) {
                outdent = false;
                break;
            }
        }

        if (outdent) {
            var deleteRange = new Range(0, 0, 0, 0);
            for (var i=startRow; i<= endRow; i++)
            {
                var line = doc.getLine(i);
                var m = line.match(re);
                deleteRange.start.row = i;
                deleteRange.end.row = i;
                deleteRange.end.column = m[0].length;
                doc.replace(deleteRange, m[1]);
            }
        }
        else {
            doc.indentRows(startRow, endRow, "//");
        }
    };

    this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);

        var tokenizedLine = this.$tokenizer.getLineTokens(line, state);
        var tokens = tokenizedLine.tokens;
        var endState = tokenizedLine.state;

        if (tokens.length && tokens[tokens.length-1].type == "comment") {
            return indent;
        }
        
        if (state == "start") {
            var match = line.match(/^.*[\{\(\[]\s*$/);
            if (match) {
                indent += tab;
            }
        } else if (state == "doc-start") {
            if (endState == "start") {
                return "";
            }
            var match = line.match(/^\s*(\/?)\*/);
            if (match) {
                if (match[1]) {
                    indent += " ";
                }
                indent += "* ";
            }
        }

        return indent;
    };

    this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
    };

    this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
    };
    
    this.createWorker = function(session) {
        var doc = session.getDocument();
        var worker = new WorkerClient(["ace", "pilot"], "worker-javascript.js", "ace/mode/javascript_worker", "JavaScriptWorker");
        worker.call("setValue", [doc.getValue()]);
        
        doc.on("change", function(e) {
            e.range = {
                start: e.data.range.start,
                end: e.data.range.end
            };
            worker.emit("change", e);
        });
            
        worker.on("jslint", function(results) {
            var errors = [];
            for (var i=0; i<results.data.length; i++) {
                var error = results.data[i];
                if (error)
                    errors.push({
                        row: error.line-1,
                        column: error.character-1,
                        text: error.reason,
                        type: "warning",
                        lint: error
                    })
            }
                    
            session.setAnnotations(errors)
        });
        
        worker.on("narcissus", function(e) {
            session.setAnnotations([e.data]);
        });
        
        worker.on("terminate", function() {
            session.clearAnnotations();
        });
        
        return worker;
    };

}).call(Mode.prototype);

exports.Mode = Mode;
});
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/a3d9ddf257e98144c883cd2dbc03ab62243dbc09@/package.json'), [], function() { return {"uid":"http://github.com/cadorn/ace-extjs/packages/ace-editor/","main":"main.js","directories":{"lib":""},"contexts":{"top":{"/main":{"include":["github.com/ajaxorg/pilot/@/lib/pilot/index","github.com/ajaxorg/ace/@/lib/ace/defaults","github.com/ajaxorg/cockpit/@/lib/cockpit/index","github.com/ajaxorg/ace/"],"load":{"github.com/ajaxorg/ace/":{"parent":"github.com/cadorn/ace-extjs/packages/ace-editor/@/main","include":["github.com/ajaxorg/ace/@/lib/ace/range","github.com/ajaxorg/ace/@/lib/ace/tokenizer","github.com/ajaxorg/ace/@/lib/ace/mode/text","github.com/ajaxorg/ace/@/lib/ace/mode/matching_brace_outdent","github.com/ajaxorg/ace/@/lib/ace/mode/doc_comment_highlight_rules"],"load":{"github.com/ajaxorg/ace/@/lib/ace/mode/*":{"parent":"github.com/ajaxorg/ace/@/","parents":{"github.com/ajaxorg/ace/@/":["github.com/ajaxorg/ace/@/lib/ace/range","github.com/ajaxorg/ace/@/lib/ace/tokenizer","github.com/ajaxorg/ace/@/lib/ace/mode/text","github.com/ajaxorg/ace/@/lib/ace/mode/matching_brace_outdent","github.com/ajaxorg/ace/@/lib/ace/mode/doc_comment_highlight_rules"],"github.com/cadorn/ace-extjs/packages/ace-editor/@/main":["github.com/ajaxorg/pilot/@/lib/pilot/index","github.com/ajaxorg/ace/@/lib/ace/defaults","github.com/ajaxorg/cockpit/@/lib/cockpit/index","github.com/ajaxorg/ace/@/lib/ace/range","github.com/ajaxorg/ace/@/lib/ace/tokenizer","github.com/ajaxorg/ace/@/lib/ace/mode/text","github.com/ajaxorg/ace/@/lib/ace/mode/matching_brace_outdent","github.com/ajaxorg/ace/@/lib/ace/mode/doc_comment_highlight_rules"],"github.com/cadorn/ace-extjs/packages/extjs-ace/@/":[],"github.com/cadorn/ace-extjs/packages/extjs4-ace/":[]}},"github.com/ajaxorg/ace/@/lib/ace/theme/*":{"parent":"github.com/ajaxorg/ace/@/","parents":{"github.com/ajaxorg/ace/@/":["github.com/ajaxorg/ace/@/lib/ace/range","github.com/ajaxorg/ace/@/lib/ace/tokenizer","github.com/ajaxorg/ace/@/lib/ace/mode/text","github.com/ajaxorg/ace/@/lib/ace/mode/matching_brace_outdent","github.com/ajaxorg/ace/@/lib/ace/mode/doc_comment_highlight_rules"],"github.com/cadorn/ace-extjs/packages/ace-editor/@/main":["github.com/ajaxorg/pilot/@/lib/pilot/index","github.com/ajaxorg/ace/@/lib/ace/defaults","github.com/ajaxorg/cockpit/@/lib/cockpit/index","github.com/ajaxorg/ace/@/lib/ace/range","github.com/ajaxorg/ace/@/lib/ace/tokenizer","github.com/ajaxorg/ace/@/lib/ace/mode/text","github.com/ajaxorg/ace/@/lib/ace/mode/matching_brace_outdent","github.com/ajaxorg/ace/@/lib/ace/mode/doc_comment_highlight_rules"],"github.com/cadorn/ace-extjs/packages/extjs-ace/@/":[],"github.com/cadorn/ace-extjs/packages/extjs4-ace/":[]}}},"id":"github.com/ajaxorg/ace/@/","ignore":true,"parents":{"github.com/cadorn/ace-extjs/packages/ace-editor/@/main":["github.com/ajaxorg/pilot/@/lib/pilot/index","github.com/ajaxorg/ace/@/lib/ace/defaults","github.com/ajaxorg/cockpit/@/lib/cockpit/index","github.com/ajaxorg/ace/@/lib/ace/range","github.com/ajaxorg/ace/@/lib/ace/tokenizer","github.com/ajaxorg/ace/@/lib/ace/mode/text","github.com/ajaxorg/ace/@/lib/ace/mode/matching_brace_outdent","github.com/ajaxorg/ace/@/lib/ace/mode/doc_comment_highlight_rules"],"github.com/cadorn/ace-extjs/packages/extjs-ace/@/":[],"github.com/cadorn/ace-extjs/packages/extjs4-ace/":[]}}},"id":"github.com/cadorn/ace-extjs/packages/ace-editor/@/main","parent":"github.com/cadorn/ace-extjs/packages/extjs-ace/@/"}}},"mappings":{"worker":{"location":"" + bravojs.mainModuleDir + "/b339f0b799f23466a9fb3ac92af4cb7e572604a6"},"ace":{"location":"" + bravojs.mainModuleDir + "/be838c6d9a6db05254ca57f11ea5029390a2997c"},"cockpit":{"location":"" + bravojs.mainModuleDir + "/539c1b401b1ed3c4feb4e16c715a1e9fd4289992"},"pilot":{"location":"" + bravojs.mainModuleDir + "/ebd88462734df1207a34b544b42917b1f1f52813"}}}; });
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/be838c6d9a6db05254ca57f11ea5029390a2997c@/lib/ace/mode/javascript_highlight_rules'), ['pilot/oop','pilot/lang','ace/mode/doc_comment_highlight_rules','ace/mode/text_highlight_rules'], function (require, exports, module) {


var oop = require("pilot/oop");
var lang = require("pilot/lang");
var DocCommentHighlightRules = require("ace/mode/doc_comment_highlight_rules").DocCommentHighlightRules;
var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

var JavaScriptHighlightRules = function() {

    var docComment = new DocCommentHighlightRules();

    var keywords = lang.arrayToMap(
        ("break|case|catch|continue|default|delete|do|else|finally|for|function|" +
        "if|in|instanceof|new|return|switch|throw|try|typeof|var|while|with").split("|")
    );

    var buildinConstants = lang.arrayToMap(
        ("null|Infinity|NaN|undefined").split("|")
    );

    var futureReserved = lang.arrayToMap(
        ("class|enum|extends|super|const|export|import|implements|let|private|" +
        "public|yield|interface|package|protected|static").split("|")
    );

    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    this.$rules = {
        "start" : [
            {
                token : "comment",
                regex : "\\/\\/.*$"
            },
            docComment.getStartRule("doc-start"),
            {
                token : "comment", // multi line comment
                regex : "\\/\\*",
                next : "comment"
            }, {
                token : "string.regexp",
                regex : "[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"
            }, {
                token : "string", // single line
                regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
            }, {
                token : "string", // multi line string start
                regex : '["].*\\\\$',
                next : "qqstring"
            }, {
                token : "string", // single line
                regex : "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
            }, {
                token : "string", // multi line string start
                regex : "['].*\\\\$",
                next : "qstring"
            }, {
                token : "constant.numeric", // hex
                regex : "0[xX][0-9a-fA-F]+\\b"
            }, {
                token : "constant.numeric", // float
                regex : "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
            }, {
                token : "constant.language.boolean",
                regex : "(?:true|false)\\b"
            }, {
                token : function(value) {
                    if (value == "this")
                        return "variable.language";
                    else if (keywords.hasOwnProperty(value))
                        return "keyword";
                    else if (buildinConstants.hasOwnProperty(value))
                        return "constant.language";
                    else if (futureReserved.hasOwnProperty(value))
                        return "invalid.illegal";
                    else if (value == "debugger")
                        return "invalid.deprecated";
                    else
                        return "identifier";
                },
                // TODO: Unicode escape sequences
                // TODO: Unicode identifiers
                regex : "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
            }, {
                token : "keyword.operator",
                regex : "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"
            }, {
                token : "lparen",
                regex : "[[({]"
            }, {
                token : "rparen",
                regex : "[\\])}]"
            }, {
                token: "comment",
                regex: "^#!.*$" 
            }, {
                token : "text",
                regex : "\\s+"
            }
        ],
        "comment" : [
            {
                token : "comment", // closing comment
                regex : ".*?\\*\\/",
                next : "start"
            }, {
                token : "comment", // comment spanning whole line
                regex : ".+"
            }
        ],
        "qqstring" : [
            {
                token : "string",
                regex : '(?:(?:\\\\.)|(?:[^"\\\\]))*?"',
                next : "start"
            }, {
                token : "string",
                regex : '.+'
            }
        ],
        "qstring" : [
            {
                token : "string",
                regex : "(?:(?:\\\\.)|(?:[^'\\\\]))*?'",
                next : "start"
            }, {
                token : "string",
                regex : '.+'
            }
        ]
    };

    this.addRules(docComment.getRules(), "doc-");
    this.$rules["doc-start"][0].next = "start";
};

oop.inherits(JavaScriptHighlightRules, TextHighlightRules);

exports.JavaScriptHighlightRules = JavaScriptHighlightRules;
});
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/a3d9ddf257e98144c883cd2dbc03ab62243dbc09@/modules/ace/worker/worker_client'), ['pilot/oop','pilot/event_emitter'], function (require, exports, module) {


var oop = require("pilot/oop");
var EventEmitter = require("pilot/event_emitter").EventEmitter;

var WorkerClient = function(topLevelNamespaces, packagedJs, module, classname) {

    this.callbacks = [];

    this.$worker = new Worker(require.uri("worker/worker.js"));

    this.$worker.postMessage({
        init : true,
        module: module,
        classname: classname
    });

    this.callbackId = 1;
    this.callbacks = {};

    var _self = this;
    this.$worker.onerror = function(e) {
        window.console && console.log && console.log(e);
        throw e;
    };
    this.$worker.onmessage = function(e) {
        var msg = e.data;
        switch(msg.type) {
            case "log":
                window.console && console.log && console.log(msg.data);
                break;

            case "event":
                _self._dispatchEvent(msg.name, {data: msg.data});
                break;

            case "call":
                var callback = _self.callbacks[msg.id];
                if (callback) {
                    callback(msg.data);
                    delete _self.callbacks[msg.id];
                }
                break;
        }
    };
};

(function(){

    oop.implement(this, EventEmitter);

    this.terminate = function() {
        this._dispatchEvent("terminate", {});
        this.$worker.terminate();
    };

    this.send = function(cmd, args) {
        this.$worker.postMessage({command: cmd, args: args});
    };

    this.call = function(cmd, args, callback) {
        if (callback) {
            var id = this.callbackId++;
            this.callbacks[id] = callback;
            args.push(id);
        }
        this.send(cmd, args);
    };

    this.emit = function(event, data) {
        this.$worker.postMessage({event: event, data: data});
    };

}).call(WorkerClient.prototype);

exports.WorkerClient = WorkerClient;

});
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/be838c6d9a6db05254ca57f11ea5029390a2997c@/lib/ace/mode/css'), ['pilot/oop','ace/mode/text','ace/tokenizer','ace/mode/css_highlight_rules','ace/mode/matching_brace_outdent'], function (require, exports, module) {


var oop = require("pilot/oop");
var TextMode = require("ace/mode/text").Mode;
var Tokenizer = require("ace/tokenizer").Tokenizer;
var CssHighlightRules = require("ace/mode/css_highlight_rules").CssHighlightRules;
var MatchingBraceOutdent = require("ace/mode/matching_brace_outdent").MatchingBraceOutdent;

var Mode = function() {
    this.$tokenizer = new Tokenizer(new CssHighlightRules().getRules());
    this.$outdent = new MatchingBraceOutdent();
};
oop.inherits(Mode, TextMode);

(function() {

    this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);

        // ignore braces in comments
        var tokens = this.$tokenizer.getLineTokens(line, state).tokens;
        if (tokens.length && tokens[tokens.length-1].type == "comment") {
            return indent;
        }

        var match = line.match(/^.*\{\s*$/);
        if (match) {
            indent += tab;
        }

        return indent;
    };

    this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
    };

    this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
    };

}).call(Mode.prototype);

exports.Mode = Mode;

});
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/be838c6d9a6db05254ca57f11ea5029390a2997c@/lib/ace/mode/css_highlight_rules'), ['pilot/oop','pilot/lang','ace/mode/text_highlight_rules'], function (require, exports, module) {


var oop = require("pilot/oop");
var lang = require("pilot/lang");
var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

var CssHighlightRules = function() {

    var properties = lang.arrayToMap(
        ("-moz-box-sizing|-webkit-box-sizing|azimuth|background-attachment|background-color|background-image|" +
        "background-position|background-repeat|background|border-bottom-color|" +
        "border-bottom-style|border-bottom-width|border-bottom|border-collapse|" +
        "border-color|border-left-color|border-left-style|border-left-width|" +
        "border-left|border-right-color|border-right-style|border-right-width|" +
        "border-right|border-spacing|border-style|border-top-color|" +
        "border-top-style|border-top-width|border-top|border-width|border|" +
        "bottom|box-sizing|caption-side|clear|clip|color|content|counter-increment|" +
        "counter-reset|cue-after|cue-before|cue|cursor|direction|display|" +
        "elevation|empty-cells|float|font-family|font-size-adjust|font-size|" +
        "font-stretch|font-style|font-variant|font-weight|font|height|left|" +
        "letter-spacing|line-height|list-style-image|list-style-position|" +
        "list-style-type|list-style|margin-bottom|margin-left|margin-right|" +
        "margin-top|marker-offset|margin|marks|max-height|max-width|min-height|" +
        "min-width|-moz-border-radius|opacity|orphans|outline-color|" +
        "outline-style|outline-width|outline|overflow|overflow-x|overflow-y|padding-bottom|" +
        "padding-left|padding-right|padding-top|padding|page-break-after|" +
        "page-break-before|page-break-inside|page|pause-after|pause-before|" +
        "pause|pitch-range|pitch|play-during|position|quotes|richness|right|" +
        "size|speak-header|speak-numeral|speak-punctuation|speech-rate|speak|" +
        "stress|table-layout|text-align|text-decoration|text-indent|" +
        "text-shadow|text-transform|top|unicode-bidi|vertical-align|" +
        "visibility|voice-family|volume|white-space|widows|width|word-spacing|" +
        "z-index").split("|")
    );

    var functions = lang.arrayToMap(
        ("rgb|rgba|url|attr|counter|counters").split("|")
    );

    var constants = lang.arrayToMap(
        ("absolute|all-scroll|always|armenian|auto|baseline|below|bidi-override|" +
        "block|bold|bolder|border-box|both|bottom|break-all|break-word|capitalize|center|" +
        "char|circle|cjk-ideographic|col-resize|collapse|content-box|crosshair|dashed|" +
        "decimal-leading-zero|decimal|default|disabled|disc|" +
        "distribute-all-lines|distribute-letter|distribute-space|" +
        "distribute|dotted|double|e-resize|ellipsis|fixed|georgian|groove|" +
        "hand|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|" +
        "ideograph-alpha|ideograph-numeric|ideograph-parenthesis|" +
        "ideograph-space|inactive|inherit|inline-block|inline|inset|inside|" +
        "inter-ideograph|inter-word|italic|justify|katakana-iroha|katakana|" +
        "keep-all|left|lighter|line-edge|line-through|line|list-item|loose|" +
        "lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|" +
        "medium|middle|move|n-resize|ne-resize|newspaper|no-drop|no-repeat|" +
        "nw-resize|none|normal|not-allowed|nowrap|oblique|outset|outside|" +
        "overline|pointer|progress|relative|repeat-x|repeat-y|repeat|right|" +
        "ridge|row-resize|rtl|s-resize|scroll|se-resize|separate|small-caps|" +
        "solid|square|static|strict|super|sw-resize|table-footer-group|" +
        "table-header-group|tb-rl|text-bottom|text-top|text|thick|thin|top|" +
        "transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|" +
        "vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|" +
        "zero").split("|")
    );
    
    var colors = lang.arrayToMap(
        ("aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|" +
        "purple|red|silver|teal|white|yellow").split("|")
    );

    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    var numRe = "\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))";

    function ic(str) {
        var re = [];
        var chars = str.split("");
        for (var i=0; i<chars.length; i++) {
            re.push(
                "[",
                chars[i].toLowerCase(),
                chars[i].toUpperCase(),
                "]"
            );
        }
        return re.join("");
    }

    this.$rules = {
        "start" : [ {
            token : "comment", // multi line comment
            regex : "\\/\\*",
            next : "comment"
        }, {
            token : "string", // single line
            regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
        }, {
            token : "string", // single line
            regex : "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
        }, {
            token : "constant.numeric",
            regex : numRe + ic("em")
        }, {
            token : "constant.numeric",
            regex : numRe + ic("ex")
        }, {
            token : "constant.numeric",
            regex : numRe + ic("px")
        }, {
            token : "constant.numeric",
            regex : numRe + ic("cm")
        }, {
            token : "constant.numeric",
            regex : numRe + ic("mm")
        }, {
            token : "constant.numeric",
            regex : numRe + ic("in")
        }, {
            token : "constant.numeric",
            regex : numRe + ic("pt")
        }, {
            token : "constant.numeric",
            regex : numRe + ic("pc")
        }, {
            token : "constant.numeric",
            regex : numRe + ic("deg")
        }, {
            token : "constant.numeric",
            regex : numRe + ic("rad")
        }, {
            token : "constant.numeric",
            regex : numRe + ic("grad")
        }, {
            token : "constant.numeric",
            regex : numRe + ic("ms")
        }, {
            token : "constant.numeric",
            regex : numRe + ic("s")
        }, {
            token : "constant.numeric",
            regex : numRe + ic("hz")
        }, {
            token : "constant.numeric",
            regex : numRe + ic("khz")
        }, {
            token : "constant.numeric",
            regex : numRe + "%"
        }, {
            token : "constant.numeric",
            regex : numRe
        }, {
            token : "constant.numeric",  // hex6 color
            regex : "#[a-fA-F0-9]{6}"
        }, {
            token : "constant.numeric", // hex3 color
            regex : "#[a-fA-F0-9]{3}"
        }, {
            token : "lparen",
            regex : "\{"
        }, {
            token : "rparen",
            regex : "\}"
        }, {
            token : function(value) {
                if (properties.hasOwnProperty(value.toLowerCase())) {
                    return "support.type";
                }
                else if (functions.hasOwnProperty(value.toLowerCase())) {
                    return "support.function";
                }
                else if (constants.hasOwnProperty(value.toLowerCase())) {
                    return "support.constant";
                }
                else if (colors.hasOwnProperty(value.toLowerCase())) {
                    return "support.constant.color";
                }
                else {
                    return "text";
                }
            },
            regex : "\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"
        }],
        "comment" : [{
            token : "comment", // closing comment
            regex : ".*?\\*\\/",
            next : "start"
        }, {
            token : "comment", // comment spanning whole line
            regex : ".+"
        }]
    };
};

oop.inherits(CssHighlightRules, TextHighlightRules);

exports.CssHighlightRules = CssHighlightRules;

});
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/be838c6d9a6db05254ca57f11ea5029390a2997c@/lib/ace/mode/html_highlight_rules'), ['pilot/oop','ace/mode/css_highlight_rules','ace/mode/javascript_highlight_rules','ace/mode/text_highlight_rules'], function (require, exports, module) {


var oop = require("pilot/oop");
var CssHighlightRules = require("ace/mode/css_highlight_rules").CssHighlightRules;
var JavaScriptHighlightRules = require("ace/mode/javascript_highlight_rules").JavaScriptHighlightRules;
var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

var HtmlHighlightRules = function() {

    // regexp must not have capturing parentheses
    // regexps are ordered -> the first match is used

    this.$rules = {
        start : [ {
            token : "text",
            regex : "<\\!\\[CDATA\\[",
            next : "cdata"
        }, {
            token : "xml_pe",
            regex : "<\\?.*?\\?>"
        }, {
            token : "comment",
            regex : "<\\!--",
            next : "comment"
        }, {
            token : "text",
            regex : "<(?=\s*script)",
            next : "script"
        }, {
            token : "text",
            regex : "<(?=\s*style)",
            next : "css"
        }, {
            token : "text", // opening tag
            regex : "<\\/?",
            next : "tag"
        }, {
            token : "text",
            regex : "\\s+"
        }, {
            token : "text",
            regex : "[^<]+"
        } ],

        script : [ {
            token : "text",
            regex : ">",
            next : "js-start"
        }, {
            token : "keyword",
            regex : "[-_a-zA-Z0-9:]+"
        }, {
            token : "text",
            regex : "\\s+"
        }, {
            token : "string",
            regex : '".*?"'
        }, {
            token : "string",
            regex : "'.*?'"
        } ],

        css : [ {
            token : "text",
            regex : ">",
            next : "css-start"
        }, {
            token : "keyword",
            regex : "[-_a-zA-Z0-9:]+"
        }, {
            token : "text",
            regex : "\\s+"
        }, {
            token : "string",
            regex : '".*?"'
        }, {
            token : "string",
            regex : "'.*?'"
        } ],

        tag : [ {
            token : "text",
            regex : ">",
            next : "start"
        }, {
            token : "keyword",
            regex : "[-_a-zA-Z0-9:]+"
        }, {
            token : "text",
            regex : "\\s+"
        }, {
            token : "string",
            regex : '".*?"'
        }, {
            token : "string",
            regex : "'.*?'"
        } ],

        cdata : [ {
            token : "text",
            regex : "\\]\\]>",
            next : "start"
        }, {
            token : "text",
            regex : "\\s+"
        }, {
            token : "text",
            regex : ".+"
        } ],

        comment : [ {
            token : "comment",
            regex : ".*?-->",
            next : "start"
        }, {
            token : "comment",
            regex : ".+"
        } ]
    };

    var jsRules = new JavaScriptHighlightRules().getRules();
    this.addRules(jsRules, "js-");
    this.$rules["js-start"].unshift({
        token: "comment",
        regex: "\\/\\/.*(?=<\\/script>)",
        next: "tag"
    }, {
        token: "text",
        regex: "<\\/(?=script)",
        next: "tag"
    });

    var cssRules = new CssHighlightRules().getRules();
    this.addRules(cssRules, "css-");
    this.$rules["css-start"].unshift({
        token: "text",
        regex: "<\\/(?=style)",
        next: "tag"
    });
};

oop.inherits(HtmlHighlightRules, TextHighlightRules);

exports.HtmlHighlightRules = HtmlHighlightRules;
});
require.memoize(bravojs.realpath(bravojs.mainModuleDir + '/b339f0b799f23466a9fb3ac92af4cb7e572604a6@/package.json'), [], function() { return {"uid":"http://github.com/cadorn/ace-extjs/packages/ace-worker/","main":"worker.js","directories":{"lib":""},"mappings":{"ace":{"location":"" + bravojs.mainModuleDir + "/be838c6d9a6db05254ca57f11ea5029390a2997c"},"cockpit":{"location":"" + bravojs.mainModuleDir + "/539c1b401b1ed3c4feb4e16c715a1e9fd4289992"},"pilot":{"location":"" + bravojs.mainModuleDir + "/ebd88462734df1207a34b544b42917b1f1f52813"}}}; });
__bravojs_loaded_moduleIdentifier = bravojs.realpath(bravojs.mainModuleDir + '/be838c6d9a6db05254ca57f11ea5029390a2997c@/lib/ace/mode/html');