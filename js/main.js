'use strict';


{

    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {

        const omikuji = ['大吉', '中吉', '小吉', '吉', '末吉', '凶'];
        const num = Math.floor(Math.random() * omikuji.length);
        btn.textContent = omikuji[num];

    });
}