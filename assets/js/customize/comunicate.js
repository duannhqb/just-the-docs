function NHDeComunicationSearch(e) {
    console.log(`[nhdComunicationSearch] >>>>>> ${JSON.stringify(e)}`);
}

// require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@latest/min/vs' } });
// // window.MonacoEnvironment = { getWorkerUrl: () => proxy };

// // let proxy = URL.createObjectURL(new Blob([`
// // 	self.MonacoEnvironment = {
// // 		baseUrl: 'https://unpkg.com/monaco-editor@latest/min/'
// // 	};
// // 	importScripts('https://unpkg.com/monaco-editor@latest/min/vs/base/worker/workerMain.js');
// // `], { type: 'text/javascript' }));

// // require.config({
// //     'vs/nls': {
// //         availableLanguages: {
// //             '*': 'de'
// //         }
// //     }
// // });

// // require(["vs/editor/editor.main"], function() {
// //     let editor = monaco.editor.create(document.getElementById('container'), {
// //         value: [
// //             'function x() {',
// //             '\tconsole.log("Hello world!");',
// //             '}'
// //         ].join('\n'),
// //         language: 'javascript',
// //         theme: 'vs-dark',
// //         automaticLayout: true
// //     });
// // });



// (function() {

//     var PLAY_SAMPLES = [{
//             chapter: "Creating the editor",
//             name: "Hello world!",
//             id: "creating-the-editor-hello-world",
//             path: "creating-the-editor/hello-world"
//         },
//         {
//             chapter: "Creating the editor",
//             name: "Editor basic options",
//             id: "creating-the-editor-editor-basic-options",
//             path: "creating-the-editor/editor-basic-options"
//         },
//         {
//             chapter: "Creating the editor",
//             name: "Hard wrapping",
//             id: "creating-the-editor-hard-wrapping",
//             path: "creating-the-editor/hard-wrapping"
//         },
//         {
//             chapter: "Creating the editor",
//             name: "Syntax highlighting for HTML elements",
//             id: "creating-the-editor-syntax-highlighting-for-html-elements",
//             path: "creating-the-editor/syntax-highlighting-for-html-elements"
//         },
//         {
//             chapter: "Interacting with the editor",
//             name: "Adding a command to an editor instance",
//             id: "interacting-with-the-editor-adding-a-command-to-an-editor-instance",
//             path: "interacting-with-the-editor/adding-a-command-to-an-editor-instance"
//         },
//         {
//             chapter: "Interacting with the editor",
//             name: "Adding an action to an editor instance",
//             id: "interacting-with-the-editor-adding-an-action-to-an-editor-instance",
//             path: "interacting-with-the-editor/adding-an-action-to-an-editor-instance"
//         },
//         {
//             chapter: "Interacting with the editor",
//             name: "Revealing a position",
//             id: "interacting-with-the-editor-revealing-a-position",
//             path: "interacting-with-the-editor/revealing-a-position"
//         },
//         {
//             chapter: "Interacting with the editor",
//             name: "Rendering glyphs in the margin",
//             id: "interacting-with-the-editor-rendering-glyphs-in-the-margin",
//             path: "interacting-with-the-editor/rendering-glyphs-in-the-margin"
//         },
//         {
//             chapter: "Interacting with the editor",
//             name: "Line and Inline decorations",
//             id: "interacting-with-the-editor-line-and-inline-decorations",
//             path: "interacting-with-the-editor/line-and-inline-decorations"
//         },
//         {
//             chapter: "Interacting with the editor",
//             name: "Customizing the line numbers",
//             id: "interacting-with-the-editor-customizing-the-line-numbers",
//             path: "interacting-with-the-editor/customizing-the-line-numbers"
//         },
//         {
//             chapter: "Interacting with the editor",
//             name: "Listening to mouse events",
//             id: "interacting-with-the-editor-listening-to-mouse-events",
//             path: "interacting-with-the-editor/listening-to-mouse-events"
//         },
//         {
//             chapter: "Interacting with the editor",
//             name: "Listening to key events",
//             id: "interacting-with-the-editor-listening-to-key-events",
//             path: "interacting-with-the-editor/listening-to-key-events"
//         },
//         {
//             chapter: "Customizing the appearence",
//             name: "Exposed colors",
//             id: "customizing-the-appearence-exposed-colors",
//             path: "customizing-the-appearence/exposed-colors"
//         },
//         {
//             chapter: "Customizing the appearence",
//             name: "Scrollbars",
//             id: "customizing-the-appearence-scrollbars",
//             path: "customizing-the-appearence/scrollbars"
//         },
//         {
//             chapter: "Customizing the appearence",
//             name: "Tokens and colors",
//             id: "customizing-the-appearence-tokens-and-colors",
//             path: "customizing-the-appearence/tokens-and-colors"
//         },
//         {
//             chapter: "Creating the DiffEditor",
//             name: "Hello diff world!",
//             id: "creating-the-diffeditor-hello-diff-world",
//             path: "creating-the-diffeditor/hello-diff-world"
//         },
//         {
//             chapter: "Creating the DiffEditor",
//             name: "Multi-line example",
//             id: "creating-the-diffeditor-multi-line-example",
//             path: "creating-the-diffeditor/multi-line-example"
//         },
//         {
//             chapter: "Creating the DiffEditor",
//             name: "Inline Diff Example",
//             id: "creating-the-diffeditor-inline-diff-example",
//             path: "creating-the-diffeditor/inline-diff-example"
//         },
//         {
//             chapter: "Creating the DiffEditor",
//             name: "Navigating a Diff",
//             id: "creating-the-diffeditor-navigating-a-diff",
//             path: "creating-the-diffeditor/navigating-a-diff"
//         },
//         {
//             chapter: "Extending Language Services",
//             name: "Custom languages",
//             id: "extending-language-services-custom-languages",
//             path: "extending-language-services/custom-languages"
//         },
//         {
//             chapter: "Extending Language Services",
//             name: "Completion provider example",
//             id: "extending-language-services-completion-provider-example",
//             path: "extending-language-services/completion-provider-example"
//         },
//         {
//             chapter: "Extending Language Services",
//             name: "Codelens provider example",
//             id: "extending-language-services-codelens-provider-example",
//             path: "extending-language-services/codelens-provider-example"
//         },
//         {
//             chapter: "Extending Language Services",
//             name: "Color provider example",
//             id: "extending-language-services-color-provider-example",
//             path: "extending-language-services/color-provider-example"
//         },
//         {
//             chapter: "Extending Language Services",
//             name: "Symbols provider example",
//             id: "extending-language-services-symbols-provider-example",
//             path: "extending-language-services/symbols-provider-example"
//         },
//         {
//             chapter: "Extending Language Services",
//             name: "Folding provider example",
//             id: "extending-language-services-folding-provider-example",
//             path: "extending-language-services/folding-provider-example"
//         },
//         {
//             chapter: "Extending Language Services",
//             name: "Hover provider example",
//             id: "extending-language-services-hover-provider-example",
//             path: "extending-language-services/hover-provider-example"
//         },
//         {
//             chapter: "Extending Language Services",
//             name: "Semantic tokens provider example",
//             id: "extending-language-services-semantic-tokens-provider-example",
//             path: "extending-language-services/semantic-tokens-provider-example"
//         },
//         {
//             chapter: "Extending Language Services",
//             name: "Configure JavaScript defaults",
//             id: "extending-language-services-configure-javascript-defaults",
//             path: "extending-language-services/configure-javascript-defaults"
//         },
//         {
//             chapter: "Extending Language Services",
//             name: "Configure JSON defaults",
//             id: "extending-language-services-configure-json-defaults",
//             path: "extending-language-services/configure-json-defaults"
//         }
//     ];

//     if (typeof exports !== 'undefined') {
//         exports.PLAY_SAMPLES = PLAY_SAMPLES
//     } else {
//         self.PLAY_SAMPLES = PLAY_SAMPLES;
//     }

// })();

// (function() {

//     'use strict';

//     var isMac = /Mac/i.test(navigator.userAgent);
//     window.onload = function() {
//         require(['vs/editor/editor.main'], function() {
//             xhr('playground/monaco.d.ts.txt').then(function(response) {
//                 monaco.languages.typescript.javascriptDefaults.addExtraLib(response.responseText, 'ts:monaco.d.ts');
//                 monaco.languages.typescript.javascriptDefaults.addExtraLib([
//                     'declare var require: {',
//                     '	toUrl(path: string): string;',
//                     '	(moduleName: string): any;',
//                     '	(dependencies: string[], callback: (...args: any[]) => any, errorback?: (err: any) => void): any;',
//                     '	config(data: any): any;',
//                     '	onError: Function;',
//                     '};',
//                 ].join('\n'), 'ts:require.d.ts');
//             });

//             var loading = document.getElementById('loading');
//             loading.parentNode.removeChild(loading);
//             load();

//         });
//     };

//     var editor = null;
//     var data = {
//         js: {
//             model: null,
//             state: null
//         },
//         css: {
//             model: null,
//             state: null
//         },
//         html: {
//             model: null,
//             state: null
//         }
//     };

//     function load() {

//         function layout() {
//             var GLOBAL_PADDING = 20;

//             var WIDTH = window.innerWidth - 2 * GLOBAL_PADDING;
//             var HEIGHT = window.innerHeight;

//             var TITLE_HEIGHT = 110;
//             var FOOTER_HEIGHT = 80;
//             var TABS_HEIGHT = 20;
//             var INNER_PADDING = 20;
//             var SWITCHER_HEIGHT = 30;

//             var HALF_WIDTH = Math.floor((WIDTH - INNER_PADDING) / 2);
//             var REMAINING_HEIGHT = HEIGHT - TITLE_HEIGHT - FOOTER_HEIGHT - SWITCHER_HEIGHT;

//             playgroundContainer.style.width = WIDTH + 'px';
//             playgroundContainer.style.height = (HEIGHT - FOOTER_HEIGHT) + 'px';

//             sampleSwitcher.style.position = 'absolute';
//             sampleSwitcher.style.top = TITLE_HEIGHT + 'px';
//             sampleSwitcher.style.left = GLOBAL_PADDING + 'px';

//             typingContainer.style.position = 'absolute';
//             typingContainer.style.top = GLOBAL_PADDING + TITLE_HEIGHT + SWITCHER_HEIGHT + 'px';
//             typingContainer.style.left = GLOBAL_PADDING + 'px';
//             typingContainer.style.width = HALF_WIDTH + 'px';
//             typingContainer.style.height = REMAINING_HEIGHT + 'px';

//             tabArea.style.position = 'absolute';
//             tabArea.style.boxSizing = 'border-box';
//             tabArea.style.top = 0;
//             tabArea.style.left = 0;
//             tabArea.style.width = HALF_WIDTH + 'px';
//             tabArea.style.height = TABS_HEIGHT + 'px';

//             editorContainer.style.position = 'absolute';
//             editorContainer.style.boxSizing = 'border-box';
//             editorContainer.style.top = TABS_HEIGHT + 'px';
//             editorContainer.style.left = 0;
//             editorContainer.style.width = HALF_WIDTH + 'px';
//             editorContainer.style.height = (REMAINING_HEIGHT - TABS_HEIGHT) + 'px';

//             if (editor) {
//                 editor.layout({
//                     width: HALF_WIDTH - 2,
//                     height: (REMAINING_HEIGHT - TABS_HEIGHT) - 1
//                 });
//             }

//             runContainer.style.position = 'absolute';
//             runContainer.style.top = GLOBAL_PADDING + TITLE_HEIGHT + SWITCHER_HEIGHT + TABS_HEIGHT + 'px';
//             runContainer.style.left = GLOBAL_PADDING + INNER_PADDING + HALF_WIDTH + 'px';
//             runContainer.style.width = HALF_WIDTH + 'px';
//             runContainer.style.height = (REMAINING_HEIGHT - TABS_HEIGHT) + 'px';

//             runIframeHeight = (REMAINING_HEIGHT - TABS_HEIGHT);
//             if (runIframe) {
//                 runIframe.style.height = runIframeHeight + 'px';
//             }
//         }

//         function changeTab(selectedTabNode, desiredModelId) {
//             for (var i = 0; i < tabArea.childNodes.length; i++) {
//                 var child = tabArea.childNodes[i];
//                 if (/tab/.test(child.className)) {
//                     child.className = 'tab';
//                 }
//             }
//             selectedTabNode.className = 'tab active';

//             var currentState = editor.saveViewState();

//             var currentModel = editor.getModel();
//             if (currentModel === data.js.model) {
//                 data.js.state = currentState;
//             } else if (currentModel === data.css.model) {
//                 data.css.state = currentState;
//             } else if (currentModel === data.html.model) {
//                 data.html.state = currentState;
//             }

//             editor.setModel(data[desiredModelId].model);
//             editor.restoreViewState(data[desiredModelId].state);
//             editor.focus();
//         }


//         // create the typing side
//         var typingContainer = document.createElement('div');
//         typingContainer.className = 'typingContainer';

//         var tabArea = (function() {
//             var tabArea = document.createElement('div');
//             tabArea.className = 'tabArea';

//             var jsTab = document.createElement('span');
//             jsTab.className = 'tab active';
//             jsTab.appendChild(document.createTextNode('JavaScript'));
//             jsTab.onclick = function() { changeTab(jsTab, 'js'); };
//             tabArea.appendChild(jsTab);

//             var cssTab = document.createElement('span');
//             cssTab.className = 'tab';
//             cssTab.appendChild(document.createTextNode('CSS'));
//             cssTab.onclick = function() { changeTab(cssTab, 'css'); };
//             tabArea.appendChild(cssTab);

//             var htmlTab = document.createElement('span');
//             htmlTab.className = 'tab';
//             htmlTab.appendChild(document.createTextNode('HTML'));
//             htmlTab.onclick = function() { changeTab(htmlTab, 'html'); };
//             tabArea.appendChild(htmlTab);

//             var runLabel = 'Press ' + (isMac ? 'CMD + return' : 'CTRL + Enter') + ' to run the code.';
//             var runBtn = document.createElement('button');
//             runBtn.className = 'action run';
//             runBtn.setAttribute('role', 'button');
//             runBtn.setAttribute('aria-label', runLabel);
//             runBtn.appendChild(document.createTextNode('Run'));
//             runBtn.onclick = function() { run(); };
//             tabArea.appendChild(runBtn);

//             return tabArea;
//         })();

//         var editorContainer = document.createElement('div');
//         editorContainer.className = 'editor-container';

//         typingContainer.appendChild(tabArea);
//         typingContainer.appendChild(editorContainer);

//         var runContainer = document.createElement('div');
//         runContainer.className = 'run-container';

//         var sampleSwitcher = document.createElement('select');
//         var sampleChapter;
//         PLAY_SAMPLES.forEach(function(sample) {
//             if (!sampleChapter || sampleChapter.label !== sample.chapter) {
//                 sampleChapter = document.createElement('optgroup');
//                 sampleChapter.label = sample.chapter;
//                 sampleSwitcher.appendChild(sampleChapter);
//             }
//             var sampleOption = document.createElement('option');
//             sampleOption.value = sample.id;
//             sampleOption.appendChild(document.createTextNode(sample.name));
//             sampleChapter.appendChild(sampleOption);
//         });
//         sampleSwitcher.className = 'sample-switcher';

//         var LOADED_SAMPLES = [];

//         function findLoadedSample(sampleId) {
//             for (var i = 0; i < LOADED_SAMPLES.length; i++) {
//                 var sample = LOADED_SAMPLES[i];
//                 if (sample.id === sampleId) {
//                     return sample;
//                 }
//             }
//             return null;
//         }

//         function findSamplePath(sampleId) {
//             for (var i = 0; i < PLAY_SAMPLES.length; i++) {
//                 var sample = PLAY_SAMPLES[i];
//                 if (sample.id === sampleId) {
//                     return sample.path;
//                 }
//             }
//             return null;
//         }

//         function loadSample(sampleId, callback) {
//             var sample = findLoadedSample(sampleId);
//             if (sample) {
//                 return callback(null, sample);
//             }

//             var samplePath = findSamplePath(sampleId);
//             if (!samplePath) {
//                 return callback(new Error('sample not found'));
//             }

//             samplePath = 'playground/new-samples/' + samplePath;

//             var js = xhr(samplePath + '/sample.js').then(function(response) { return response.responseText });
//             var css = xhr(samplePath + '/sample.css').then(function(response) { return response.responseText });
//             var html = xhr(samplePath + '/sample.html').then(function(response) { return response.responseText });
//             Promise.all([js, css, html]).then(function(_) {
//                 var js = _[0];
//                 var css = _[1];
//                 var html = _[2];
//                 LOADED_SAMPLES.push({
//                     id: sampleId,
//                     js: js,
//                     css: css,
//                     html: html
//                 });
//                 return callback(null, findLoadedSample(sampleId));
//             }, function(err) {
//                 callback(err, null);
//             });
//         }

//         sampleSwitcher.onchange = function() {
//             var sampleId = sampleSwitcher.options[sampleSwitcher.selectedIndex].value;
//             window.location.hash = sampleId;
//         };

//         var playgroundContainer = document.getElementById('playground');

//         layout();
//         window.onresize = layout;

//         playgroundContainer.appendChild(sampleSwitcher);
//         playgroundContainer.appendChild(typingContainer);
//         playgroundContainer.appendChild(runContainer);

//         data.js.model = monaco.editor.createModel('console.log("hi")', 'javascript');
//         data.css.model = monaco.editor.createModel('css', 'css');
//         data.html.model = monaco.editor.createModel('html', 'html');

//         editor = monaco.editor.create(editorContainer, {
//             model: data.js.model,
//             minimap: {
//                 enabled: false
//             }
//         });

//         var currentToken = 0;

//         function parseHash(firstTime) {
//             var sampleId = window.location.hash.replace(/^#/, '');
//             if (!sampleId) {
//                 sampleId = PLAY_SAMPLES[0].id;
//             }

//             if (firstTime) {
//                 for (var i = 0; i < sampleSwitcher.options.length; i++) {
//                     var opt = sampleSwitcher.options[i];
//                     if (opt.value === sampleId) {
//                         sampleSwitcher.selectedIndex = i;
//                         break;
//                     }
//                 }
//             }

//             var myToken = (++currentToken);
//             loadSample(sampleId, function(err, sample) {
//                 if (err) {
//                     alert('Sample not found! ' + err.message);
//                     return;
//                 }
//                 if (myToken !== currentToken) {
//                     return;
//                 }
//                 data.js.model.setValue(sample.js);
//                 data.html.model.setValue(sample.html);
//                 data.css.model.setValue(sample.css);
//                 editor.setScrollTop(0);
//                 run();
//             });
//         }
//         window.onhashchange = parseHash;
//         parseHash(true);

//         function run() {
//             doRun(runContainer);
//         }

//         editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, run);
//         window.addEventListener('keydown', function keyDown(ev) {
//             if ((isMac && !ev.metaKey) || !ev.ctrlKey) {
//                 return;
//             }

//             if (ev.shiftKey || ev.altKey || ev.keyCode !== 13) {
//                 return;
//             }

//             ev.preventDefault();
//             run();
//         });
//     }

//     var runIframe = null,
//         runIframeHeight = 0;

//     function doRun(runContainer) {
//         if (runIframe) {
//             // Unload old iframe
//             runContainer.removeChild(runIframe);
//         }

//         // Load new iframe
//         runIframe = document.createElement('iframe');
//         runIframe.id = 'runner';
//         runIframe.src = 'playground/playground-runner.html';
//         runIframe.className = 'run-iframe';
//         runIframe.style.boxSizing = 'border-box';
//         runIframe.style.height = runIframeHeight + 'px';
//         runIframe.style.width = '100%';
//         runIframe.style.border = '1px solid lightgrey';
//         runIframe.frameborder = '0';
//         runContainer.appendChild(runIframe);

//         var getLang = function(lang) {
//             return data[lang].model.getValue();
//         };

//         runIframe.addEventListener('load', function(e) {
//             runIframe.contentWindow.load(getLang('js'), getLang('html'), getLang('css'));
//         });
//     }

//     var preloaded = {};
//     (function() {
//         var elements = Array.prototype.slice.call(document.querySelectorAll('pre[data-preload]'), 0);

//         elements.forEach(function(el) {
//             var path = el.getAttribute('data-preload');
//             preloaded[path] = el.innerText || el.textContent;
//             el.parentNode.removeChild(el);
//         });
//     })();

//     function xhr(url) {
//         if (preloaded[url]) {
//             return Promise.resolve({
//                 responseText: preloaded[url]
//             });
//         }

//         var req = null;
//         return new Promise(function(c, e) {
//             req = new XMLHttpRequest();
//             req.onreadystatechange = function() {
//                 if (req._canceled) { return; }

//                 if (req.readyState === 4) {
//                     if ((req.status >= 200 && req.status < 300) || req.status === 1223) {
//                         c(req);
//                     } else {
//                         e(req);
//                     }
//                     req.onreadystatechange = function() {};
//                 }
//             };

//             req.open("GET", url, true);
//             req.responseType = "";

//             req.send(null);
//         }, function() {
//             req._canceled = true;
//             req.abort();
//         });
//     }

// })();