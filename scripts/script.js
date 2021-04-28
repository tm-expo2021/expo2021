/**
refreshCaptcha
use:
<input type="hidden" name="captcha_sid" value="31fc87e85f3f2b95fa6eaef2b2068ecb" /><img src="http://www.expodns.org/bitrix/tools/captcha.php?captcha_sid=31fc87e85f3f2b95fa6eaef2b2068ecb" width="180" height="40" id="capchaHolder"/> <a class="reload" href="javascript:refreshCaptcha('capchaHolder')">Reload‹</a>
**/
function refreshCaptcha(imgId) {
    var dtNowDate;
    dtNowDate = new Date();
    nMilliseconds = dtNowDate.getTime();
    document.getElementById(imgId).src += '&refresh=' + nMilliseconds;
}

/**
<p><a href="javascript: shide('answ')">Quest</a></p><p id="answ" style="display:none;"><br/>Answ answ answ<br/></p>
**/
function ge() {
    var ea;
    for (var i = 0; i < arguments.length; i++) {
        var e = arguments[i];
        if (typeof e == 'string') e = document.getElementById(e);
        if (arguments.length == 1) return e;
        if (!ea) ea = new Array();
        ea[ea.length] = e;
    }
    return ea;
}

function show() {
    for (var i = 0; i < arguments.length; i++) {
        var element = ge(arguments[i]);
        if (element && element.style) element.style.display = 'block';
    }
}

function hide() {
    for (var i = 0; i < arguments.length; i++) {
        var element = ge(arguments[i]);
        if (element && element.style) element.style.display = 'none';
    }
}

function shown(el) {
    el = ge(el);
    return (el.style.display != 'none');
}

function shide(el) {
    if (shown(el)) {
        hide(el);
    } else {
        show(el);
    }
}
