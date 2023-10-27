import { HELLO } from './constants.js';
const $body = document.querySelector('body');
const $p = document.createElement('p');
$p.innerHTML = `${HELLO} from popup.js`;
if ($body) {
    $body.appendChild($p);
}
