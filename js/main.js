document.querySelector('#pinkTop').addEventListener('click', selectTop);
document.querySelector('#purpleTop').addEventListener('click', selectTop);
document.querySelector('#yellowTop').addEventListener('click', selectTop);

document.querySelector('#blueBottom').addEventListener('click', selectBottom);
document.querySelector('#whitePantBottom').addEventListener('click', selectBottom);
document.querySelector('#whiteSkirtBottom').addEventListener('click', selectBottom);

document.querySelector('#clear').addEventListener('click', clear);
document.querySelector('#dressMe').addEventListener('click', checkIfMatch);

let selectedTop;
let selectedBottom;

function selectTop(top) {
    selectedTop = top.target.id;
    if (selectedTop==='pinkTop') {
        document.querySelector('#pinkTopSelected').classList.remove('hidden');
        document.querySelector('#purpleTopSelected').classList.add('hidden');
        document.querySelector('#yellowTopSelected').classList.add('hidden');
    } else if (selectedTop==='purpleTop') {
        document.querySelector('#purpleTopSelected').classList.remove('hidden');
        document.querySelector('#pinkTopSelected').classList.add('hidden');
        document.querySelector('#yellowTopSelected').classList.add('hidden');
    } else if (selectedTop==='yellowTop') {
        document.querySelector('#yellowTopSelected').classList.remove('hidden');
        document.querySelector('#purpleTopSelected').classList.add('hidden');
        document.querySelector('#pinkTopSelected').classList.add('hidden');
    }
}

function selectBottom(bottom) {
    selectedBottom = bottom.target.id;
    if (selectedBottom==='blueBottom') {
        document.querySelector('#blueBottomSelected').classList.remove('hidden');
        document.querySelector('#whitePantBottomSelected').classList.add('hidden');
        document.querySelector('#whiteSkirtBottomSelected').classList.add('hidden');
    } else if (selectedBottom==='whitePantBottom') {
        document.querySelector('#whitePantBottomSelected').classList.remove('hidden');
        document.querySelector('#blueBottomSelected').classList.add('hidden');
        document.querySelector('#whiteSkirtBottomSelected').classList.add('hidden');
    } else if (selectedBottom==='whiteSkirtBottom') {
        document.querySelector('#whiteSkirtBottomSelected').classList.remove('hidden');
        document.querySelector('#whitePantBottomSelected').classList.add('hidden');
        document.querySelector('#blueBottomSelected').classList.add('hidden');
    }
}

function clear() {

    document.querySelector('#purpleTopSelected').classList.add('hidden');
    document.querySelector('#pinkTopSelected').classList.add('hidden');
    document.querySelector('#yellowTopSelected').classList.add('hidden');

    document.querySelector('#whiteSkirtBottomSelected').classList.add('hidden');
    document.querySelector('#whitePantBottomSelected').classList.add('hidden');
    document.querySelector('#blueBottomSelected').classList.add('hidden');

    document.querySelector('#isMatch').classList.add('hidden');         
    document.querySelector('#notMatch').classList.add('hidden');         
}

function checkIfMatch() {
    if ((selectedTop==='pinkTop' && selectedBottom==='blueBottom') ||
        (selectedTop==='purpleTop' && selectedBottom==='whiteSkirtBottom') ||
        (selectedTop==='yellowTop' && selectedBottom==='whiteSkirtBottom') ||
        (selectedTop==='purpleTop' && selectedBottom==='whitePantBottom')) {
        document.querySelector('#isMatch').classList.remove('hidden');         
    } else {
        document.querySelector('#notMatch').classList.remove('hidden');         
    }
}