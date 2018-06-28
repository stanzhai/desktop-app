define("ace/theme/tomorrow",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

    exports.isDark = false;
    exports.cssClass = "ace-tomorrow";
    exports.cssText = ".ace-tomorrow .ace_gutter {\
    background: #ebebeb;\
    color: #333;\
    overflow : hidden;\
    }\
    .ace-tomorrow .ace_print-margin {\
    width: 1px;\
    background: #e8e8e8;\
    }\
    .ace-tomorrow {\
    background-color: #FFFFFF;\
    color: black;\
    }\
    .ace-tomorrow .ace_cursor {\
    color: black;\
    }\
    .ace-tomorrow .ace_invisible {\
    color: rgb(191, 191, 191);\
    }\
    .ace-tomorrow .ace_constant.ace_buildin {\
    color: rgb(88, 72, 246);\
    }\
    .ace-tomorrow .ace_constant.ace_language {\
    color: rgb(88, 92, 246);\
    }\
    .ace-tomorrow .ace_constant.ace_library {\
    color: rgb(6, 150, 14);\
    }\
    .ace-tomorrow .ace_invalid {\
    background-color: rgb(153, 0, 0);\
    color: white;\
    }\
    .ace-tomorrow .ace_fold {\
    }\
    .ace-tomorrow .ace_support.ace_function {\
    color: rgb(60, 76, 114);\
    }\
    .ace-tomorrow .ace_support.ace_constant {\
    color: rgb(6, 150, 14);\
    }\
    .ace-tomorrow .ace_support.ace_type,\
    .ace-tomorrow .ace_support.ace_class\
    .ace-tomorrow .ace_support.ace_other {\
    color: rgb(109, 121, 222);\
    }\
    .ace-tomorrow .ace_variable.ace_parameter {\
    font-style:italic;\
    color:#FD971F;\
    }\
    .ace-tomorrow .ace_keyword.ace_operator {\
    color: rgb(104, 118, 135);\
    }\
    .ace-tomorrow .ace_comment {\
    color: #236e24;\
    }\
    .ace-tomorrow .ace_comment.ace_doc {\
    color: #236e24;\
    }\
    .ace-tomorrow .ace_comment.ace_doc.ace_tag {\
    color: #236e24;\
    }\
    .ace-tomorrow .ace_constant.ace_numeric {\
    color: rgb(0, 0, 205);\
    }\
    .ace-tomorrow .ace_variable {\
    color: rgb(49, 132, 149);\
    }\
    .ace-tomorrow .ace_xml-pe {\
    color: rgb(104, 104, 91);\
    }\
    .ace-tomorrow .ace_entity.ace_name.ace_function {\
    color: #0000A2;\
    }\
    .ace-tomorrow .ace_heading {\
    color: rgb(12, 7, 255);\
    }\
    .ace-tomorrow .ace_list {\
    color:rgb(185, 6, 144);\
    }\
    .ace-tomorrow .ace_marker-layer .ace_selection {\
    background: rgb(181, 213, 255);\
    }\
    .ace-tomorrow .ace_marker-layer .ace_step {\
    background: rgb(252, 255, 0);\
    }\
    .ace-tomorrow .ace_marker-layer .ace_stack {\
    background: rgb(164, 229, 101);\
    }\
    .ace-tomorrow .ace_marker-layer .ace_bracket {\
    margin: -1px 0 0 -1px;\
    border: 1px solid rgb(192, 192, 192);\
    }\
    .ace-tomorrow .ace_marker-layer .ace_active-line {\
    background: rgba(0, 0, 0, 0.07);\
    }\
    .ace-tomorrow .ace_gutter-active-line {\
    background-color : #dcdcdc;\
    }\
    .ace-tomorrow .ace_marker-layer .ace_selected-word {\
    background: rgb(250, 250, 255);\
    border: 1px solid rgb(200, 200, 250);\
    }\
    .ace-tomorrow .ace_storage,\
    .ace-tomorrow .ace_keyword,\
    .ace-tomorrow .ace_meta.ace_tag {\
    color: rgb(147, 15, 128);\
    }\
    .ace-tomorrow .ace_string.ace_regex {\
    color: rgb(255, 0, 0)\
    }\
    .ace-tomorrow .ace_string {\
    color: #1A1AA6;\
    }\
    .ace-tomorrow .ace_entity.ace_other.ace_attribute-name {\
    color: #994409;\
    }\
    .ace-tomorrow .ace_indent-guide {\
    background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\
    }\
    ";
    
    var dom = require("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
    });
                    (function() {
                        window.require(["ace/theme/tomorrow"], function(m) {
                            if (typeof module == "object" && typeof exports == "object" && module) {
                                module.exports = m;
                            }
                        });
                    })();
                