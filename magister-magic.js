// ==UserScript==
// @name         🌈 Magister 💝 Magic 🦄
// @namespace    http://mathijskadijk.nl/
// @version      0.1
// @description  Making Magister great again!
// @author       Mathijs Kadijk
// @match        https://toetsanalyse.rowis.nl/*
// @match        https://corlaer.magister.net/*
// @run-at       context-menu
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';

    if (window.location.host === "toetsanalyse.rowis.nl") {
        let cijfers = [...document.getElementsByClassName("avg_grade")].map(x => x.innerHTML);
        GM_setValue("cijfers", cijfers)
        alert(cijfers.length + " cijfers gekopieerd.");
    } else if (window.location.host === "corlaer.magister.net") {
        let cijfers = GM_getValue("cijfers");
        let invoervelden = [...document.getElementsByClassName("cijfer-text-input")]

        if (invoervelden.length != cijfers.length) {
            invoervelden.map(function(x, i) { x.value = cijfers[i] })
        } else {
            alert("Er zijn niet evenveel invoervelden (" + invoervelden.length + ") als cijfers (" + cijfers.length + ").")
        }
    } else {
        alert("Website niet herkend.")
    }
})();
