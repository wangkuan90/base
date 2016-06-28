{
    "globals": {
        "jasmine": false,
        "spyOn": false,
        "it": false,
        "console": false,
        "describe": false,
        "expect": false,
        "beforeEach": false,
        "waits": false,
        "waitsFor": false,
        "runs": false,
        "a": false
    },

    "node" : true,        //  指定运行环境为node.js
    "es5" : true,
    "browser" : false,

    "asi" : false,        // 如果是真，JSHint会无视没有加分号的行尾    提示  Missing semicolon
    "bitwise" : true,     // 如果是真，JSHint会禁用位运算符  效率低     提示  Unexpected use of '<<'.  or '>>'
    "boss" : false,       // 如果为真，那么JSHint会允许在if，for，while里面编写赋值语句。 提示 Expected a conditional expression and instead saw an assignment.
    "curly": true,        // 如果为真，JSHint会要求你在使用if和while等结构语句时加上{}来明确代码块。提示  Expected '{' and instead saw 'console'
    "debug": false,       // 如果为真，JSHint会允许代码中出现debugger的语句。不过建议你最好在检测代码前去掉debug的语句。提示  Forgotten 'debugger' statement?
    "eqeqeq": true,       // 如果为真，JSHint会看你在代码中是否都用了===或者是!==，而不是使用==和!=。提示  Expected '===' and instead saw '=='.
    "evil": false,        // 如果为真，JSHint会允许使用eval   提示  eval can be harmful.
    "newcap": true,       // 如果为真，JSHint会要求每一个构造函数名都要大写字母开头 提示  A constructor name should start with an uppercase letter.
    "noarg": true,        // 如果为真，JSHint会禁止arguments.caller和arguments.callee的使用
    "noempty": false,
    "nonew": false,
    "nomen": true,        // 如果为真，JSHint会禁用下划线的变量名。
    "onevar": true,		  // 如果为真，JSHint期望函数只被var的形式声明一遍。 
    "plusplus": false,    // 如果为真，JSHint会在发现首个错误后停止检查。
    "regexp": false,      // 如果为真，JSHint会不允许使用.和[^…]的正则，
    "undef": true,        // 如果为真，JSHint会要求所有的非全局变量，在使用前都被声明。
    "sub": true,          // 如果为真，JSHint会允许各种形式的下标来访问对象。
    "strict": true,       // 如果为真，JSHint会要求你使用use strict;语法。
    "white": true,        // 如果为true，JSHint会依据严格的空白规范检查你的代码。
    "unused": true        // 禁止定义变量却不使用   提示 is defined but never used.
}