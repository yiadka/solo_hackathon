"use strict";
const $body = document.querySelector('body');
const $helloContent = document.createElement('div');
$helloContent.className = 'hello-content';
$helloContent.innerHTML = `Hello from content_scripts.js`;
if ($body) {
    $body.appendChild($helloContent);
}
