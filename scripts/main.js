const keywords = [`pwd`, `mkdir`, `cd`, `ls`, `>`, `rmdir`, `rm`, `echo`, `cat`];

function wrapWithSpan(text, className) {
    const span = document.createElement(`span`);
    span.classList.add(className);
    span.appendChild(document.createTextNode(text));
    return span;
}

let codels = document.querySelectorAll(`pre code *`);

[...codels].filter(el => el.innerText == `$ `)
      .map(el => el.nextSibling)
      .forEach(el => {
        const text = el.data.trim();
        const firstWord = text.split(` `)[0].trim();
        const rest = `${text.slice(firstWord.length)}\n`;
        // const codeBlock = el.parentNode;
        el.replaceWith(wrapWithSpan(firstWord, `bash-command`), rest);
        // codeBlock.innerHTML = codeBlock.innerHTML.replace(/ +/g, ` `);
      }); 