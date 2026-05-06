// ==UserScript==
// @name         Okta Dashboard max width override
// @namespace    http://tampermonkey.net/
// @version      2026-05-06
// @description  Expands the main Okta dashboard content width
// @author       https://github.com/adrievx
// @match        https://*.okta.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const xpath = '/html/body/div[2]/div/div/div/div/section/main/div/section/section';

    function findElementByXPath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    function applyStyles(el) {
        el.style.maxWidth = '2000px';
        el.style.width = '100%';
    }

    function waitElement() {
        const interval = setInterval(() => {
            const el = findElementByXPath(xpath);
            if (el) {
                clearInterval(interval);
                applyStyles(el);
            }
        }, 500);

        setTimeout(() => clearInterval(interval), 30000);
    }

    waitElement();
})();
