Prism.languages.n4js=Prism.languages.extend('javascript',{keyword:/\b(?:any|Array|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}),Prism.languages.insertBefore('n4js','function',{annotation:{pattern:/@+\w+/,alias:'operator'}}),Prism.languages.n4jsd=Prism.languages.n4js;