const rand = Math.floor(100 * Math.random()) + 1,
    clients = {
        ssstik: ["9873762851395779", "3974025564", "5232407545"],
        ssstik_back: ["8948135330327270", "6558788153", "2384535586"],
        ssstik3: ["7647406474707126", "5621729243", "8987889498"],
        ssstik4: ["1730393708785684", "3948469743", "7887714753"]
    },
    android_apps = {
        appdl: "com.video.videodownloader_appdl",
        universal: "com.universal.video.downloader",
        lite: "com.video.videodownloader_appdl_lite"
    };
var client = clients.ssstik,
    android_app = android_apps.appdl,
    vignette_content = (1 <= rand && rand <= 3 && (client = clients.ssstik3), 51 <= rand && rand <= 96 && (client = clients.ssstik_back), 97 <= rand && rand <= 100 && (client = clients.ssstik4), 1 <= rand && rand <= 50 && (android_app = android_apps.universal), 51 <= rand && rand <= 70 && (android_app = android_apps.appdl), 71 <= rand && rand <= 100 && (android_app = android_apps.lite), ! function(window, document) {
        function elements_resizer() {
            var homeMenuHeight;
            "undefined" != typeof clear && ("ar" !== s_locale ? (clear.style.right = submit.offsetWidth + 15 + "px", paste.style.right = submit.offsetWidth + 15 + "px") : (clear.style.left = submit.offsetWidth + 15 + "px", paste.style.left = submit.offsetWidth + 15 + "px")), splashWrapper && (homeMenuHeight = document.getElementsByClassName("home-menu")[0].offsetHeight, splashWrapper.style.paddingTop = homeMenuHeight + "px")
        }
        const submit = document.querySelector("#submit"),
            splashWrapper = document.querySelector("#splash_wrapper");
        null !== document.getElementById("menuToggle") && document.getElementById("menuToggle").addEventListener("click", function(e) {
            var menu = document.getElementById("menu"),
                menuWidth = menu.offsetWidth,
                clientWidth = document.getElementsByTagName("html")[0].clientWidth;
            menu.classList.toggle("open"), menuWidth != clientWidth && (document.getElementById("menu").style.width = clientWidth + "px")
        });
        elements_resizer(), window.addEventListener("resize", function() {
            elements_resizer()
        });
        for (var adPosBottom = document.getElementsByClassName("ad_bottom_pos"), adIdBottom = window.innerWidth <= 480 ? "pw_24527" : "pw_24529", i = 0; i < adPosBottom.length; i++) adPosBottom[i].innerHTML = '<div class="adsbypubpower" data-ad-slot="' + adIdBottom + '"></div>', (powerTag.Init = window.powerTag.Init || []).push(function() {
            powerAPITag.display(adIdBottom)
        });
        for (var adPosTop = document.getElementsByClassName("ad_top_pos"), adIdTop = window.innerWidth <= 480 ? "pw_24526" : "pw_24528", i = 0; i < adPosTop.length; i++) adPosTop[i].innerHTML = '<div class="adsbypubpower" data-ad-slot="' + adIdTop + '"></div>', (powerTag.Init = window.powerTag.Init || []).push(function() {
            powerAPITag.display(adIdTop)
        });
        (powerTag.Init = window.powerTag.Init || []).push(function() {
            powerAPITag.mobileDetect() ? powerAPITag.initStickyBanner("pw_24531") : powerAPITag.initStickyBanner("pw_24530")
        })
    }(this, this.document), '<ins class="adsbygoogle" style="display:block; margin: 0 auto;" data-ad-client="ca-pub-' + client[0] + '" data-ad-slot="' + client[1] + '" data-ad-format="auto" data-full-width-responsive="true"></ins>'),
    defaultLoader;

function checkAdsBlocked(callback) {
    var ADS_URL = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
        xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function() {
        xhr.readyState == XMLHttpRequest.DONE && callback(0 === xhr.status || xhr.responseURL !== ADS_URL)
    }, xhr.open("HEAD", ADS_URL, !0), xhr.send(null)
}

function downloadX(hdInfoLink) {
    console.log("rewarded init clicked"),
        function(hdInfoLink) {
            var hdDownload, curlink;
            document.getElementById("hd_download") && !(hdDownload = document.getElementById("hd_download")).hasAttribute("hx-post") && (hdDownload.setAttribute("hx-post", hdInfoLink), hdDownload.setAttribute("hx-trigger", "click"), htmx.process(hdDownload), hdDownload.click(), "undefined" != typeof powerTag ? ((powerTag.Init = window.powerTag.Init || []).push(function() {
                console.log("rewarded init pp activated"), powerAPITag.initRewarded("pw_24532", {
                    onRewarded: reward => {
                        console.log("onRewarded", reward)
                    },
                    onComplete: reward => {
                        console.log("onComplete", reward), window.powerTagReward && (window.location.href = window.powerTagReward)
                    },
                    onClose: () => {
                        console.log("onClose")
                    },
                    onAdEmpty: () => {
                        console.log("onAdEmpty");
                        var curlink = document.getElementById("hd_download");
                        curlink.innerHTML = "Please wait, getting link...", setTimeout(function() {
                            window.powerTagReward && (window.location.href = window.powerTagReward, curlink.innerHTML = "HD link is ready!")
                        }, 4e3)
                    }
                })
            }), (powerTag.Init = window.powerTag.Init || []).push(function() {
                powerAPITag.getRewardedAd("pw_24532")
            })) : ((curlink = document.getElementById("hd_download")).innerHTML = "Please wait...", setTimeout(function() {
                window.location.href = window.powerTagReward, curlink.innerHTML = "HD link is ready!"
            }, 4e3)))
        }(hdInfoLink)
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) return resolve(document.querySelector(selector));
        const observer = new MutationObserver(mutations => {
            document.querySelector(selector) && (resolve(document.querySelector(selector)), observer.disconnect())
        });
        observer.observe(document.body, {
            childList: !0,
            subtree: !0
        })
    })
}

function insertAdElements() {
    var c = window.uadclient,
        prv = window.uadprovider;
    waitForElm("#googlead_main").then(elm => {
        "google" == window.uadprovider && (elm.setAttribute("data-ad-client", "ca-pub-" + c[0]), elm.setAttribute("data-ad-slot", c[1]), (adsbygoogle = window.adsbygoogle || []).push({}))
    }), waitForElm("#ad_bottom").then(elm => {
        let size_width = window.innerWidth || document.body.clientWidth;
        window.innerHeight || document.body.clientHeight;
        size_width < 500 && 310 < size_width && (elm.setAttribute("data-ad-client", "ca-pub-" + c[0]), elm.setAttribute("data-ad-slot", c[2]), (adsbygoogle = window.adsbygoogle || []).push({})), "google" !== window.uadprovider && document.getElementById("adBottom") && (document.getElementById("adBottom").style.display = "none")
    }), 0 !== s_ven && waitForElm("#ad-vignette").then(elm => {
        elm.classList.add(prv), "undefined" != typeof custom_ios_vignette_init && custom_ios_vignette_init()
    })
}

function iOS() {
    var userPlatform = navigator?.userAgentData?.platform || navigator?.platform || "unknown";
    return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(userPlatform) || navigator.userAgent.includes("Mac") && "ontouchend" in document
}

function isAndroid() {
    return -1 < (navigator?.userAgent?.toLowerCase() || "unknown").indexOf("android")
}
window.powerTagReward = null, ! function(w, d, s, l, i) {
    w[l] = w[l] || [], w[l].push({
        "gtm.start": (new Date).getTime(),
        event: "gtm.js"
    });
    w = d.getElementsByTagName(s)[0], l = d.createElement(s);
    l.async = !0, l.src = "https://www.googletagmanager.com/gtm.js?id=" + i, w.parentNode.insertBefore(l, w)
}(window, document, "script", "dataLayer", s_idgg), !async function() {
    var defaultAdProvider, f, j;
    window.uadprovider = "google", "undefined" != typeof s_prov && (window.uadprovider = s_prov), window.uadclient = client, "google" == window.uadprovider && (defaultAdProvider = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-" + client[0], f = document.head, (j = document.createElement("script")).async = !0, j.crossOrigin = "anonymous", j.src = defaultAdProvider, j.defer = !0, f.appendChild(j))
}().then(() => insertAdElements()), void 0 === defaultLoader && (defaultLoader = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; display: block; border-radius: 50%;margin-bottom: 10px;" width="60px" height="60px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="32" stroke-width="8" stroke="#0057b7" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" dur="1.8518518518518516s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform></circle><circle cx="50" cy="50" r="23" stroke-width="8" stroke="#ffdd00" stroke-dasharray="36.12831551628262 36.12831551628262" stroke-dashoffset="36.12831551628262" fill="none" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" dur="1.8518518518518516s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform></circle></svg>'), ! function(window, document) {
    var iosLink, errorContainerIcon = '<div class="is-icon"><svg class="" viewBox="0 0 20 20"><path d="M14.38,3.467l0.232-0.633c0.086-0.226-0.031-0.477-0.264-0.559c-0.229-0.081-0.48,0.033-0.562,0.262l-0.234,0.631C10.695,2.38,7.648,3.89,6.616,6.689l-1.447,3.93l-2.664,1.227c-0.354,0.166-0.337,0.672,0.035,0.805l4.811,1.729c-0.19,1.119,0.445,2.25,1.561,2.65c1.119,0.402,2.341-0.059,2.923-1.039l4.811,1.73c0,0.002,0.002,0.002,0.002,0.002c0.23,0.082,0.484-0.033,0.568-0.262c0.049-0.129,0.029-0.266-0.041-0.377l-1.219-2.586l1.447-3.932C18.435,7.768,17.085,4.676,14.38,3.467 M9.215,16.211c-0.658-0.234-1.054-0.869-1.014-1.523l2.784,0.998C10.588,16.215,9.871,16.447,9.215,16.211 M16.573,10.27l-1.51,4.1c-0.041,0.107-0.037,0.227,0.012,0.33l0.871,1.844l-4.184-1.506l-3.734-1.342l-4.185-1.504l1.864-0.857c0.104-0.049,0.188-0.139,0.229-0.248l1.51-4.098c0.916-2.487,3.708-3.773,6.222-2.868C16.187,5.024,17.489,7.783,16.573,10.27"></path></svg></div>';
    iOS() && document.querySelector('meta[name="viewport"]').setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1");
    const input = document.querySelector("#main_page_text"),
        paste = document.querySelector("#paste"),
        clear = document.querySelector("#clear");
    let supportPaste = "";
    if (void 0 !== navigator.clipboard && (supportPaste = navigator.clipboard.readText) && null !== paste && (paste.style.display = "flex"), null !== input && input.addEventListener("keyup", function(e) {
            0 < input.value.length ? (paste.style.display = "none", clear.style.display = "flex") : (supportPaste && (paste.style.display = "flex"), clear.style.display = "none")
        }), null !== paste) paste.addEventListener("click", function(e) {
        navigator.clipboard.readText().then(function(f) {
            input.value = f, paste.style.display = "none", clear.style.display = "flex"
        })
    });
    if (null !== clear) clear.addEventListener("click", function(e) {
        input.value = "", supportPaste && (paste.style.display = "flex"), clear.style.display = "none"
    });

    function showCustomVignette(s_ven) {
        0 === s_ven ? console.log("Vignette is disabled, not showing...") : "" == vignette_content ? console.log("Vignette is empty, not showing...") : setTimeout(function() {
            var elements = document.getElementsByClassName("vignette_active");

            function showVignette(e, etype) {
                const goog_vignette = document.querySelectorAll('ins[data-vignette-loaded="true"]');
                0 == goog_vignette.length && iOS() && (console.log("GVignette 0"), e.preventDefault()), e.stopPropagation(), MicroModal.init({
                    awaitOpenAnimation: !0,
                    awaitCloseAnimation: !0,
                    debugMode: !1
                }), MicroModal.show("ad-vignette", {
                    onShow: function(modal) {
                        console.log("Modal fired"), document.getElementById("overlayimage").style.display = "block", document.getElementById("sss_body").style.overflow = "hidden", document.getElementById("ad-vignette-content").innerHTML = window.vignette_content, modal.classList.contains("ios_promo") ? (document.getElementById("ad-vignette-header").innerHTML = '<button class="modal__btn" data-micromodal-close="" aria-label="Close this dialog window"><svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-micromodal-close="" aria-label="Close this dialog window"><rect width="24" height="24"/><path d="M7 17L16.8995 7.10051" stroke="#999" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 7.00001L16.8995 16.8995" stroke="#999" stroke-linecap="round" stroke-linejoin="round"/></svg></button>', htmx.process(modal)) : (adsbygoogle = window.adsbygoogle || []).push({}), 0 == goog_vignette.length && iOS() && e.srcElement.getAttribute("href") && setTimeout(function() {
                            console.log("Native vignette redirect: " + e.srcElement.getAttribute("href")), window.location.href = e.srcElement.getAttribute("href")
                        }, 2e3)
                    },
                    onClose: function(modal) {
                        document.getElementById("ad-vignette-content").innerHTML = "";
                        var overlayImage = document.getElementById("overlayimage");
                        overlayImage.classList.add("a_hide"), overlayImage.classList.remove("a_show"), modal.classList.contains("ios_promo") && htmx.ajax("POST", "/vignette/event?close", {
                            target: "#ad-vignette-content",
                            swap: "none"
                        }), setTimeout(function() {
                            overlayImage.style.display = "none", overlayImage.classList.remove("a_hide"), document.getElementById("sss_body").style.overflow = "auto"
                        }, 1500)
                    }
                })
            }
            console.log("Ad shown, vignette activated");
            for (var i = 0; i < elements.length; i++) elements[i].addEventListener("click", showVignette, !1), console.log("Listeners emitted...")
        }, 150)
    }
    isAndroid() && (1 == s_mbe && null !== document.getElementById("app_section_block") && (document.getElementById("app_section_block").style.display = "block"), 1 == s_tbe) && null !== document.getElementById("twt_promo") && (document.getElementById("twt_promo").style.display = "block"), !iOS() || 1 != s_mbe && 1 != s_tbe || (iosLink = "https://apps.apple.com/app/apple-store/id1618823987?pt=124355880", null !== document.getElementById("dwapp") && (document.getElementById("dwapp").href = iosLink + "&ct=ssstik_site_head"), null !== document.getElementById("dwapp_link_goto") && (document.getElementById("dwapp_link_goto").href = iosLink + "&ct=ssstik_site_banner"), null !== document.getElementById("dwapp_link_banner") && (document.getElementById("dwapp_link_banner").href = iosLink + "&ct=ssstik_site_banner"), null !== document.getElementById("dwapp_banner") && (document.getElementById("dwapp_banner").src = "https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred_2x.png", document.getElementById("dwapp_banner").href = iosLink + "&ct=ssstik_site_head", document.getElementById("dwapp_banner").style.borderRadius = "10px"), 0 !== document.getElementsByClassName("app_market_system").length && (iosLink = document.getElementsByClassName("app_market_system"), Array.prototype.forEach.call(iosLink, function(el) {
        el.innerText = "iOS"
    })), 0 !== document.getElementsByClassName("app_market_vendor").length && (iosLink = document.getElementsByClassName("app_market_vendor"), Array.prototype.forEach.call(iosLink, function(el) {
        el.innerText = "Apple Store"
    }))), !isAndroid() || 1 != s_mbe && 1 != s_tbe || (iosLink = "https://play.google.com/store/apps/details?id=" + android_app, null !== document.getElementById("dwapp") && (document.getElementById("dwapp").href = iosLink), null !== document.getElementById("dwapp_link_goto") && (document.getElementById("dwapp_link_goto").href = iosLink), null !== document.getElementById("dwapp_link_banner") && (document.getElementById("dwapp_link_banner").href = iosLink)), document.addEventListener("DOMContentLoaded", function() {
        var el;
        for (el of document.querySelectorAll("#main_page_text, #submit")) el.disabled = !1;
        var form = htmx.find("#_gcaptcha_pt");
        document.querySelector("#main_loader").innerHTML = defaultLoader, null !== form && (form.setAttribute("hx-post", "/" + s_furl + "?url=dl"), form.setAttribute("hx-target", "#target"), form.setAttribute("hx-swap", "innerHTML"), form.setAttribute("include-vals", "tt:'" + s_tt + "'"), htmx.process(form), form = htmx.find("#splash"), htmx.process(form))
    }), window.addEventListener("htmx:afterRequest", function(e) {
        var pasteBtn = document.querySelector("#paste"),
            clearBtn = document.querySelector("#clear"),
            submitBtn = document.querySelector("#submit"),
            mainLoader = document.querySelector("#main_loader"),
            mainBodyHide = document.querySelector("#main_body_hide");
        pasteBtn && (pasteBtn.style.display = "none"), clearBtn && (clearBtn.style.display = "flex"), submitBtn && submitBtn.removeAttribute("disabled"), mainLoader && (mainLoader.style.display = "none"), mainBodyHide && (mainBodyHide.style.display = "none"), null !== document.querySelector("#slides_generate") && ((pasteBtn = document.createElement("script")).onload = function() {
            new Splide(".splide", {
                lazyLoad: "nearby",
                perPage: 1,
                type: "loop",
                autoplay: !1,
                arrows: !0,
                height: "40vh",
                fixedHeight: "40vh",
                interval: 2700
            }).mount(), document.querySelector("#slides_generate").addEventListener("click", function() {
                document.querySelector("#slides_generate").setAttribute("disabled", ""), document.querySelector("#slides_generate").innerHTML = "Wait a minute, converting...", dataLayer.push({
                    event: "slides",
                    status: "render_start"
                })
            }, !1)
        }, pasteBtn.src = "/js/splide.min.js", document.head.appendChild(pasteBtn))
    }), window.addEventListener("htmx:afterOnLoad", function(e) {
        window.powerTagReward = e.detail.xhr.getResponseHeader("hx-delay-redirect"), "slides_generate" == e.detail.requestConfig.elt.id && ((e = document.getElementById("slides_generate")).removeAttribute("disabled"), e.innerHTML = "Your video is ready!", e.style.backgroundColor = "#9edd5f", dataLayer.push({
            event: "slides",
            status: "render_end"
        }))
    }), window.addEventListener("htmx:beforeRequest", function(e) {
        var link, errorContainer, partnerUnknown;
        e.detail.elt[0] && "main_page_text" == e.detail.elt[0].id && (document.getElementById("paste").style.display = "none", document.getElementById("clear").style.display = "none", link = document.getElementById("main_page_text").value, (errorContainer = document.getElementById("errorContainer")).innerHTML = "", errorContainer.className = "", errorContainer.style.display = "none", dataLayer.push({
            event: "getInsertedLink",
            insertedLink: link
        }), function(link, errorContainer) {
            var partnerAlert = !1;
            return -1 === link.indexOf("likee.video/") && -1 === link.indexOf("likee.com/") || (partnerAlert = decodeURIComponent(atob(window.partnerAlerts.likee)).replace(/\+/g, " ")), -1 === link.indexOf("snackvideo.com/") && -1 === link.indexOf("sck.io/") || (partnerAlert = decodeURIComponent(atob(window.partnerAlerts.snack)).replace(/\+/g, " ")), -1 === link.indexOf("twitter.com/") && -1 === link.indexOf("x.com/") && -1 === link.indexOf("t.co/") || (partnerAlert = decodeURIComponent(atob(window.partnerAlerts.twitter)).replace(/\+/g, " ")), -1 === link.indexOf("facebook.com/") && -1 === link.indexOf("fb.com/") || (partnerAlert = decodeURIComponent(atob(window.partnerAlerts.facebook)).replace(/\+/g, " ")), -1 === link.indexOf("youtube.com/") && -1 === link.indexOf("youtu.be/") || (partnerAlert = decodeURIComponent(atob(window.partnerAlerts.youtube)).replace(/\+/g, " ")), !1 !== (partnerAlert = -1 === link.indexOf("reddit.com/") && -1 === link.indexOf("redd.it/") ? partnerAlert : 'Oops! We do not support Reddit... Use <a href="https://redvid.io/" target="_blank">Reddit Downloader</a> instead.') && (errorContainer.classList.add("info"), errorContainer.style.display = "block", errorContainer.innerHTML = '<div class="u-shadow--white">' + errorContainerIcon + "<div>" + partnerAlert + "</div></div>", 1)
        }(link, errorContainer) ? (e.preventDefault(), errorContainer.style.display = "block", link.trim().length && (document.getElementById("clear").style.display = "flex"), timeout && clearTimeout(timeout), timeout = setTimeout(function() {
            errorContainer.style.display = "none"
        }, 3e3)) : link.trim().match(".*http(s|)://.*(tiktok|xzcs3zlph).com.*/.*") ? document.querySelector("#submit").setAttribute("disabled", "") : (errorContainer.classList.add("warning"), errorContainer.classList.add("u-shadow--black"), errorContainer.style.display = "block", partnerUnknown = decodeURIComponent(atob(window.partnerAlerts.unknown)).replace(/\+/g, " "), errorContainer.innerHTML = `<div><div class="is-icon"><svg class="" viewBox="0 0 20 20"><path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path></svg></div><div>${partnerUnknown}</div></div>`, e.preventDefault(), link.trim().length && (document.getElementById("clear").style.display = "flex"), timeout = setTimeout(function() {
            errorContainer.style.display = "none"
        }, 3e3)))
    }), document.body.addEventListener("ssscurlerror", function(e) {
        var splash = document.getElementById("splash");
        splash.classList.add("error"), splash.classList.add("error--black"), document.getElementById("bigmessage").innerHTML = "Unforeseen consequences", dataLayer.push({
            event: "error",
            status: "curl_error"
        })
    }), document.body.addEventListener("sssinvalidlink", function(e) {
        document.getElementById("splash").classList.add("error"), dataLayer.push({
            event: "error",
            status: "invalid_link"
        })
    }), document.body.addEventListener("sssblockedclient", function(e) {
        document.getElementById("splash").classList.add("error"), dataLayer.push({
            event: "error",
            status: "blocked_client"
        })
    }), document.body.addEventListener("ssstterror", function(e) {
        var splash = document.getElementById("splash");
        splash.classList.add("processed"), splash.classList.add("error"), dataLayer.push({
            event: "error",
            status: "tt_error"
        })
    }), document.body.addEventListener("ssssuccess", function(e) {
        var splash = document.getElementById("splash");
        splash.classList.add("processed"), splash.classList.add("success"), showCustomVignette(s_ven), dataLayer.push({
            event: "success",
            status: "full"
        })
    }), document.body.addEventListener("ssssuccess_video", function(e) {
        var splash = document.getElementById("splash");
        splash.classList.add("processed"), splash.classList.add("success"), document.body.classList.add("response-success"), showCustomVignette(s_ven), dataLayer.push({
            event: "success",
            status: "video"
        })
    }), document.body.addEventListener("ssssuccess_videoandmp3", function(e) {
        document.body.classList.add("response-success");
        var splash = document.getElementById("splash");
        splash.classList.add("processed"), splash.classList.add("success"), showCustomVignette(s_ven), dataLayer.push({
            event: "success",
            status: "videoandmp3"
        }), checkAdsBlocked(function(adsBlocked) {
            adsBlocked && document.getElementById("hd_download") && (document.getElementById("hd_download").remove(), (adsBlocked = document.createElement("p")).innerHTML = "Please disable your Adblock to download HD quality videos!", document.getElementById("dl_btns").prepend(adsBlocked), dataLayer.push({
                event: "adblock",
                status: "detected"
            }))
        })
    }), document.body.addEventListener("ssssuccess_slides", function(e) {
        var splash = document.getElementById("splash");
        splash.classList.add("processed"), splash.classList.add("success"), dataLayer.push({
            event: "success",
            status: "slides"
        })
    }), document.body.addEventListener("ssssuccess_music", function(e) {
        var splash = document.getElementById("splash");
        splash.classList.add("processed"), splash.classList.add("success"), showCustomVignette(s_ven), dataLayer.push({
            event: "success",
            status: "music"
        })
    }), document.body.addEventListener("ssssuccess_wmonly", function(e) {
        var splash = document.getElementById("splash");
        splash.classList.add("processed"), splash.classList.add("success"), showCustomVignette(s_ven), dataLayer.push({
            event: "success",
            status: "wmonly"
        })
    }), document.body.addEventListener("ssssuccess_scraptik", function(e) {
        var splash = document.getElementById("splash");
        splash.classList.add("processed"), splash.classList.add("success"), showCustomVignette(s_ven), dataLayer.push({
            event: "success",
            status: "scraptik"
        })
    }), document.body.addEventListener("ssstokenfail", function(e) {
        window.location.href = window.location.pathname + "?" + e.detail.value
    }), document.body.addEventListener("sssfailure", function(e) {
        var splash = document.getElementById("splash");
        splash.classList.add("processed"), splash.classList.add("error"), dataLayer.push({
            event: "error",
            error_code: "fail"
        })
    }), document.body.addEventListener("sssrapidapisuccess", function(e) {
        document.getElementById("splash").classList.add("hd_success"), setTimeout(function() {
            document.getElementById("hd_download").innerHTML = "HD link is ready!"
        }, 500)
    }), document.body.addEventListener("sssrapidapifail", function(e) {
        document.getElementById("splash").classList.add("hd_error"), document.getElementById("hd_download").style.background = "#f2cb2f"
    }), document.body.addEventListener("sssrapidapifakehd", function(e) {
        document.getElementById("splash").classList.add("hd_error");
        var curlink = document.getElementById("hd_download");
        curlink.style.background = "#6c757d", curlink.setAttribute("disabled", "disabled")
    }), document.body.addEventListener("sssrapidapittfail", function(e) {
        document.getElementById("splash").classList.add("hd_error");
        var curlink = document.getElementById("hd_download");
        curlink.style.background = "#ff2200", curlink.setAttribute("disabled", "disabled")
    }), document.body.addEventListener("ssslimitexceed", function(e) {
        var errorContainer = document.getElementById("errorContainer");
        errorContainer.innerHTML = "", errorContainer.className = "", errorContainer.classList.add("warning"), errorContainer.style.display = "block", errorContainer.innerHTML = "<div>" + errorContainerIcon + '<div">You are making requests too fast! Please wait ~10 seconds...</div></div>'
    })
}(this, this.document), ! function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : e.htmx = t()
}("undefined" != typeof self ? self : this, function() {
    "use strict";
    var D = {
            onLoad: t,
            process: rt,
            on: N,
            off: I,
            trigger: lt,
            ajax: $t,
            find: w,
            findAll: S,
            closest: O,
            values: function(e, t) {
                return Ot(e, t || "post").values
            },
            remove: E,
            addClass: C,
            removeClass: R,
            toggleClass: q,
            takeClass: L,
            defineExtension: Qt,
            removeExtension: er,
            logAll: b,
            logger: null,
            config: {
                historyEnabled: !0,
                historyCacheSize: 10,
                refreshOnHistoryMiss: !1,
                defaultSwapStyle: "innerHTML",
                defaultSwapDelay: 0,
                defaultSettleDelay: 20,
                includeIndicatorStyles: !0,
                indicatorClass: "htmx-indicator",
                requestClass: "htmx-request",
                addedClass: "htmx-added",
                settlingClass: "htmx-settling",
                swappingClass: "htmx-swapping",
                allowEval: !0,
                attributesToSettle: ["class", "style", "width", "height"],
                withCredentials: !1,
                timeout: 0,
                wsReconnectDelay: "full-jitter",
                disableSelector: "[hx-disable], [data-hx-disable]",
                useTemplateFragments: !1,
                scrollBehavior: "smooth"
            },
            parseInterval: h,
            _: e,
            createEventSource: function(e) {
                return new EventSource(e, {
                    withCredentials: !0
                })
            },
            createWebSocket: function(e) {
                return new WebSocket(e, [])
            },
            version: "1.6.0"
        },
        r = ["get", "post", "put", "delete", "patch"],
        n = r.map(function(e) {
            return "[hx-" + e + "], [data-hx-" + e + "]"
        }).join(", ");

    function h(e) {
        if (null != e) return "ms" == e.slice(-2) ? parseFloat(e.slice(0, -2)) || void 0 : "s" == e.slice(-1) ? 1e3 * parseFloat(e.slice(0, -1)) || void 0 : parseFloat(e) || void 0
    }

    function c(e, t) {
        return e.getAttribute && e.getAttribute(t)
    }

    function s(e, t) {
        return e.hasAttribute && (e.hasAttribute(t) || e.hasAttribute("data-" + t))
    }

    function F(e, t) {
        return c(e, t) || c(e, "data-" + t)
    }

    function l(e) {
        return e.parentElement
    }

    function P() {
        return document
    }

    function d(e, t) {
        return t(e) ? e : l(e) ? d(l(e), t) : null
    }

    function X(e, t) {
        var r = null;
        if (d(e, function(e) {
                return r = F(e, t)
            }), "unset" !== r) return r
    }

    function v(e, t) {
        var r = e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector;
        return r && r.call(e, t)
    }

    function i(e) {
        e = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i.exec(e);
        return e ? e[1].toLowerCase() : ""
    }

    function o(e, t) {
        for (var i = (new DOMParser).parseFromString(e, "text/html").body; 0 < t;) t--, i = i.firstChild;
        return i = null == i ? P().createDocumentFragment() : i
    }

    function u(e) {
        if (D.config.useTemplateFragments) return o("<body><template>" + e + "</template></body>", 0).querySelector("template").content;
        switch (i(e)) {
            case "thead":
            case "tbody":
            case "tfoot":
            case "colgroup":
            case "caption":
                return o("<table>" + e + "</table>", 1);
            case "col":
                return o("<table><colgroup>" + e + "</colgroup></table>", 2);
            case "tr":
                return o("<table><tbody>" + e + "</tbody></table>", 2);
            case "td":
            case "th":
                return o("<table><tbody><tr>" + e + "</tr></tbody></table>", 3);
            case "script":
                return o("<div>" + e + "</div>", 1);
            default:
                return o(e, 0)
        }
    }

    function U(e) {
        e && e()
    }

    function a(e, t) {
        return Object.prototype.toString.call(e) === "[object " + t + "]"
    }

    function f(e) {
        return a(e, "Function")
    }

    function g(e) {
        return a(e, "Object")
    }

    function j(e) {
        var t = "htmx-internal-data";
        return e[t] || (e[t] = {})
    }

    function p(e) {
        var t = [];
        if (e)
            for (var r = 0; r < e.length; r++) t.push(e[r]);
        return t
    }

    function B(e, t) {
        if (e)
            for (var r = 0; r < e.length; r++) t(e[r])
    }

    function m(e) {
        var e = e.getBoundingClientRect(),
            r = e.top,
            e = e.bottom;
        return r < window.innerHeight && 0 <= e
    }

    function z(e) {
        return P().body.contains(e)
    }

    function y(e) {
        return e.trim().split(/\s+/)
    }

    function V(e, t) {
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        return e
    }

    function x(e) {
        try {
            return JSON.parse(e)
        } catch (e) {
            return ut(e), null
        }
    }

    function e(e) {
        return Ut(P().body, function() {
            return eval(e)
        })
    }

    function t(t) {
        return D.on("htmx:load", function(e) {
            t(e.detail.elt)
        })
    }

    function b() {
        D.logger = function(e, t, r) {
            console && console.log(t, e, r)
        }
    }

    function w(e, t) {
        return t ? e.querySelector(t) : w(P(), e)
    }

    function S(e, t) {
        return t ? e.querySelectorAll(t) : S(P(), e)
    }

    function E(e, t) {
        e = H(e), t ? setTimeout(function() {
            E(e)
        }, t) : e.parentElement.removeChild(e)
    }

    function C(e, t, r) {
        e = H(e), r ? setTimeout(function() {
            C(e, t)
        }, r) : e.classList && e.classList.add(t)
    }

    function R(e, t, r) {
        e = H(e), r ? setTimeout(function() {
            R(e, t)
        }, r) : e.classList && (e.classList.remove(t), 0 === e.classList.length) && e.removeAttribute("class")
    }

    function q(e, t) {
        (e = H(e)).classList.toggle(t)
    }

    function L(e, t) {
        B((e = H(e)).parentElement.children, function(e) {
            R(e, t)
        }), C(e, t)
    }

    function O(e, t) {
        if ((e = H(e)).closest) return e.closest(t);
        do {
            if (null == e || v(e, t)) return e
        } while (e = e && l(e))
    }

    function T(e, t) {
        return 0 === t.indexOf("closest ") ? [O(e, t.substr(8))] : 0 === t.indexOf("find ") ? [w(e, t.substr(5))] : "document" === t ? [document] : "window" === t ? [window] : P().querySelectorAll(t)
    }

    function A(e, t) {
        return (t ? T(e, t) : T(P().body, e))[0]
    }

    function H(e) {
        return a(e, "String") ? w(e) : e
    }

    function k(e, t, r) {
        return f(t) ? {
            target: P().body,
            event: e,
            listener: t
        } : {
            target: H(e),
            event: t,
            listener: r
        }
    }

    function N(t, r, n) {
        return rr(function() {
            var e = k(t, r, n);
            e.target.addEventListener(e.event, e.listener)
        }), f(r) ? r : n
    }

    function I(t, r, n) {
        return rr(function() {
            var e = k(t, r, n);
            e.target.removeEventListener(e.event, e.listener)
        }), f(r) ? r : n
    }

    function _(e) {
        var r, t = d(e, function(e) {
            return null !== F(e, "hx-target")
        });
        return t ? "this" === (r = F(t, "hx-target")) ? t : A(e, r) : j(e).boosted ? P().body : e
    }

    function M(e) {
        for (var t = D.config.attributesToSettle, r = 0; r < t.length; r++)
            if (e === t[r]) return 1
    }

    function W(t, r) {
        B(t.attributes, function(e) {
            !r.hasAttribute(e.name) && M(e.name) && t.removeAttribute(e.name)
        }), B(r.attributes, function(e) {
            M(e.name) && t.setAttribute(e.name, e.value)
        })
    }

    function $(e, t) {
        for (var r = tr(t), n = 0; n < r.length; n++) {
            var i = r[n];
            try {
                if (i.isInlineSwap(e)) return 1
            } catch (e) {
                ut(e)
            }
        }
        return "outerHTML" === e
    }

    function J(e, t, r) {
        var n = "#" + t.id,
            i = "outerHTML",
            e = ("true" !== e && (0 < e.indexOf(":") ? (i = e.substr(0, e.indexOf(":")), n = e.substr(e.indexOf(":") + 1, e.length)) : i = e), P().querySelector(n));
        e ? ((n = P().createDocumentFragment()).appendChild(t), le(i, e, e, n = $(i, e) ? n : t, r)) : (t.parentNode.removeChild(t), ot(P().body, "htmx:oobErrorNoTarget", {
            content: t
        }))
    }

    function Z(e, r) {
        B(S(e, "[hx-swap-oob], [data-hx-swap-oob]"), function(e) {
            var t = F(e, "hx-swap-oob");
            null != t && J(t, e, r)
        })
    }

    function G(e) {
        B(S(e, "[hx-preserve], [data-hx-preserve]"), function(e) {
            var t = F(e, "id"),
                t = P().getElementById(t);
            null != t && e.parentNode.replaceChild(t, e)
        })
    }

    function K(n, e, i) {
        B(e.querySelectorAll("[id]"), function(e) {
            var t, r;
            e.id && 0 < e.id.length && (t = n.querySelector(e.tagName + "[id='" + e.id + "']")) && t !== n && (r = e.cloneNode(), W(e, t), i.tasks.push(function() {
                W(e, r)
            }))
        })
    }

    function Y(e) {
        return function() {
            R(e, D.config.addedClass), rt(e), Ke(e), Q(e), lt(e, "htmx:load")
        }
    }

    function Q(e) {
        var t = "[autofocus]",
            e = v(e, t) ? e : e.querySelector(t);
        null != e && e.focus()
    }

    function ee(e, t, r, n) {
        for (K(e, r, n); 0 < r.childNodes.length;) {
            var i = r.firstChild;
            C(i, D.config.addedClass), e.insertBefore(i, t), i.nodeType !== Node.TEXT_NODE && i.nodeType !== Node.COMMENT_NODE && n.tasks.push(Y(i))
        }
    }

    function te(t) {
        var e = j(t);
        e.webSocket && e.webSocket.close(), e.sseEventSource && e.sseEventSource.close(), e.listenerInfos && B(e.listenerInfos, function(e) {
            t !== e.on && e.on.removeEventListener(e.trigger, e.listener)
        }), t.children && B(t.children, function(e) {
            te(e)
        })
    }

    function re(e, t, r) {
        if ("BODY" === e.tagName) se(e, t, r);
        else {
            var i, n = e.previousSibling;
            for (ee(l(e), e, t, r), i = null == n ? l(e).firstChild : n.nextSibling, j(e).replacedWith = i, r.elts = []; i && i !== e;) i.nodeType === Node.ELEMENT_NODE && r.elts.push(i), i = i.nextElementSibling;
            te(e), l(e).removeChild(e)
        }
    }

    function ne(e, t, r) {
        ee(e, e.firstChild, t, r)
    }

    function ie(e, t, r) {
        ee(l(e), e, t, r)
    }

    function oe(e, t, r) {
        ee(e, null, t, r)
    }

    function ae(e, t, r) {
        ee(l(e), e.nextSibling, t, r)
    }

    function se(e, t, r) {
        var n = e.firstChild;
        if (ee(e, n, t, r), n) {
            for (; n.nextSibling;) te(n.nextSibling), e.removeChild(n.nextSibling);
            te(n), e.removeChild(n)
        }
    }

    function ue(e, t) {
        var n, e = X(e, "hx-select");
        return e && (n = P().createDocumentFragment(), B(t.querySelectorAll(e), function(e) {
            n.appendChild(e)
        }), t = n), t
    }

    function le(e, t, r, n, i) {
        switch (e) {
            case "none":
                return;
            case "outerHTML":
                return void re(r, n, i);
            case "afterbegin":
                return void ne(r, n, i);
            case "beforebegin":
                return void ie(r, n, i);
            case "beforeend":
                return void oe(r, n, i);
            case "afterend":
                return void ae(r, n, i);
            default:
                for (var o = tr(t), a = 0; a < o.length; a++) {
                    var s = o[a];
                    try {
                        var u = s.handleSwap(e, r, n, i);
                        if (u) {
                            if (void 0 !== u.length)
                                for (var l = 0; l < u.length; l++) {
                                    var f = u[l];
                                    f.nodeType !== Node.TEXT_NODE && f.nodeType !== Node.COMMENT_NODE && i.tasks.push(Y(f))
                                }
                            return
                        }
                    } catch (e) {
                        ut(e)
                    }
                }
                se(r, n, i)
        }
    }

    function fe(e) {
        if (-1 < e.indexOf("<title")) {
            e = e.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, "").match(/<title(\s[^>]*>|>)([\s\S]*?)<\/title>/im);
            if (e) return e[2]
        }
    }

    function ce(e, t, r, n, i) {
        var o = fe(n),
            a = (o && ((a = w("title")) ? a.innerHTML = o : window.document.title = o), u(n));
        a && (Z(a, i), G(a = ue(r, a)), le(e, r, t, a, i))
    }

    function he(e, t, r) {
        e = e.getResponseHeader(t);
        if (0 === e.indexOf("{")) {
            var o, a, i = x(e);
            for (o in i) i.hasOwnProperty(o) && lt(r, o, a = g(a = i[o]) ? a : {
                value: a
            })
        } else lt(r, e, [])
    }
    var de = /\s/,
        ve = /[\s,]/,
        ge = /[_$a-zA-Z]/,
        pe = /[_$a-zA-Z0-9]/,
        me = ['"', "'", "/"],
        ye = /[^\s]/;

    function xe(e) {
        for (var t = [], r = 0; r < e.length;) {
            if (ge.exec(e.charAt(r))) {
                for (var n = r; pe.exec(e.charAt(r + 1));) r++;
                t.push(e.substr(n, r - n + 1))
            } else if (-1 !== me.indexOf(e.charAt(r))) {
                var i = e.charAt(r),
                    n = r;
                for (r++; r < e.length && e.charAt(r) !== i;) "\\" === e.charAt(r) && r++, r++;
                t.push(e.substr(n, r - n + 1))
            } else {
                var o = e.charAt(r);
                t.push(o)
            }
            r++
        }
        return t
    }

    function be(e, t, r) {
        return ge.exec(e.charAt(0)) && "true" !== e && "false" !== e && "this" !== e && e !== r && "." !== t
    }

    function we(e, t, r) {
        if ("[" === t[0]) {
            t.shift();
            for (var n = 1, i = " return (function(" + r + "){ return (", o = null; 0 < t.length;) {
                var a = t[0];
                if ("]" === a) {
                    if (0 === --n) {
                        null === o && (i += "true"), t.shift(), i += ")})";
                        try {
                            var s = Ut(e, function() {
                                return Function(i)()
                            }, function() {
                                return !0
                            });
                            return s.source = i, s
                        } catch (e) {
                            return ot(P().body, "htmx:syntax:error", {
                                error: e,
                                source: i
                            }), null
                        }
                    }
                } else "[" === a && n++;
                be(a, o, r) ? i += "((" + r + "." + a + ") ? (" + r + "." + a + ") : (window." + a + "))" : i += a, o = t.shift()
            }
        }
    }

    function Se(e, t) {
        for (var r = ""; 0 < e.length && !e[0].match(t);) r += e.shift();
        return r
    }
    var Ee = "input, textarea, select";

    function Ce(e) {
        var t = F(e, "hx-trigger"),
            r = [];
        if (t) {
            var n = xe(t);
            do {
                Se(n, ye);
                var i = n.length,
                    o = Se(n, /[,\[\s]/);
                if ("" !== o)
                    if ("every" === o) {
                        var a = {
                            trigger: "every"
                        };
                        Se(n, ye), a.pollInterval = h(Se(n, /[,\[\s]/)), Se(n, ye), (s = we(e, n, "event")) && (a.eventFilter = s), r.push(a)
                    } else if (0 === o.indexOf("sse:")) r.push({
                    trigger: "sse",
                    sseEvent: o.substr(4)
                });
                else {
                    var s, u = {
                        trigger: o
                    };
                    for ((s = we(e, n, "event")) && (u.eventFilter = s); 0 < n.length && "," !== n[0];) {
                        Se(n, ye);
                        var l = n.shift();
                        "changed" === l ? u.changed = !0 : "once" === l ? u.once = !0 : "consume" === l ? u.consume = !0 : "delay" === l && ":" === n[0] ? (n.shift(), u.delay = h(Se(n, ve))) : "from" === l && ":" === n[0] ? (n.shift(), u.from = Se(n, ve)) : "target" === l && ":" === n[0] ? (n.shift(), u.target = Se(n, ve)) : "throttle" === l && ":" === n[0] ? (n.shift(), u.throttle = h(Se(n, ve))) : "queue" === l && ":" === n[0] ? (n.shift(), u.queue = Se(n, ve)) : "root" !== l && "threshold" !== l || ":" !== n[0] ? ot(e, "htmx:syntax:error", {
                            token: n.shift()
                        }) : (n.shift(), u[l] = Se(n, ve))
                    }
                    r.push(u)
                }
            } while (n.length === i && ot(e, "htmx:syntax:error", {
                    token: n.shift()
                }), Se(n, ye), "," === n[0] && n.shift())
        }
        return 0 < r.length ? r : v(e, "form") ? [{
            trigger: "submit"
        }] : v(e, Ee) ? [{
            trigger: "change"
        }] : [{
            trigger: "click"
        }]
    }

    function Re(e) {
        j(e).cancelled = !0
    }

    function qe(e, t, r, n) {
        var i = j(e);
        i.timeout = setTimeout(function() {
            z(e) && !0 !== i.cancelled && (He(n, it("hx:poll:trigger", {
                triggerSpec: n
            })) || Zt(t, r, e), qe(e, t, F(e, "hx-" + t), n))
        }, n.pollInterval)
    }

    function Le(e) {
        return location.hostname === e.hostname && c(e, "href") && 0 !== c(e, "href").indexOf("#")
    }

    function Oe(t, r, e) {
        var i, o, n;
        ("A" === t.tagName && Le(t) || "FORM" === t.tagName) && (r.boosted = !0, "A" === t.tagName ? (n = "get", i = c(t, "href"), r.pushURL = !0) : (o = c(t, "method"), "get" === (n = o ? o.toLowerCase() : "get") && (r.pushURL = !0), i = c(t, "action")), e.forEach(function(e) {
            ke(t, n, i, r, e, !0)
        }))
    }

    function Te(e) {
        return "FORM" === e.tagName || v(e, 'input[type="submit"], button') && null !== O(e, "form") || "A" === e.tagName && e.href && ("#" === e.getAttribute("href") || 0 !== e.getAttribute("href").indexOf("#"))
    }

    function Ae(e, t) {
        return j(e).boosted && "A" === e.tagName && "click" === t.type && (t.ctrlKey || t.metaKey)
    }

    function He(e, t) {
        var r = e.eventFilter;
        if (r) try {
            return !0 !== r(t)
        } catch (e) {
            return ot(P().body, "htmx:eventFilter:error", {
                error: e,
                source: r.source
            }), 1
        }
    }

    function ke(o, a, s, e, u, l) {
        var t = u.from ? T(o, u.from) : [o];
        B(t, function(n) {
            var i = function(e) {
                if (z(o)) {
                    if (!Ae(o, e) && ((l || Te(o)) && e.preventDefault(), !He(u, e))) {
                        var t = j(e),
                            r = (t.triggerSpec = u, null == t.handledFor && (t.handledFor = []), j(o));
                        if (t.handledFor.indexOf(o) < 0 && (t.handledFor.push(o), u.consume && e.stopPropagation(), !u.target || !e.target || v(e.target, u.target))) {
                            if (u.once) {
                                if (r.triggeredOnce) return;
                                r.triggeredOnce = !0
                            }
                            if (u.changed) {
                                if (r.lastValue === o.value) return;
                                r.lastValue = o.value
                            }
                            r.delayed && clearTimeout(r.delayed), r.throttle || (u.throttle ? r.throttle || (Zt(a, s, o, e), r.throttle = setTimeout(function() {
                                r.throttle = null
                            }, u.throttle)) : u.delay ? r.delayed = setTimeout(function() {
                                Zt(a, s, o, e)
                            }, u.delay) : Zt(a, s, o, e))
                        }
                    }
                } else n.removeEventListener(u.trigger, i)
            };
            null == e.listenerInfos && (e.listenerInfos = []), e.listenerInfos.push({
                trigger: u.trigger,
                listener: i,
                on: n
            }), n.addEventListener(u.trigger, i)
        })
    }
    var Ne = !1,
        Ie = null;

    function Me() {
        Ie || (Ie = function() {
            Ne = !0
        }, window.addEventListener("scroll", Ie), setInterval(function() {
            Ne && (Ne = !1, B(P().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), function(e) {
                De(e)
            }))
        }, 200))
    }

    function De(e) {
        var t = j(e);
        !t.revealed && m(e) && (t.revealed = !0, t.initialized ? Zt(t.verb, t.path, e) : e.addEventListener("htmx:afterProcessNode", function() {
            Zt(t.verb, t.path, e)
        }, {
            once: !0
        }))
    }

    function Fe(e, t, r) {
        for (var n = y(r), i = 0; i < n.length; i++) {
            var o = n[i].split(/:(.+)/);
            "connect" === o[0] && Pe(e, o[1], 0), "send" === o[0] && Ue(e)
        }
    }

    function Pe(s, r, n) {
        var e, t;
        z(s) && (0 == r.indexOf("/") && (e = location.hostname + (location.port ? ":" + location.port : ""), "https:" == location.protocol ? r = "wss://" + e + r : "http:" == location.protocol && (r = "ws://" + e + r)), (t = D.createWebSocket(r)).onerror = function(e) {
            ot(s, "htmx:wsError", {
                error: e,
                socket: t
            }), Xe(s)
        }, t.onclose = function(e) {
            0 <= [1006, 1012, 1013].indexOf(e.code) && (e = je(n), setTimeout(function() {
                Pe(s, r, n + 1)
            }, e))
        }, t.onopen = function(e) {
            n = 0
        }, (j(s).webSocket = t).addEventListener("message", function(e) {
            if (!Xe(s)) {
                for (var t = e.data, r = (st(s, function(e) {
                        t = e.transformResponse(t, null, s)
                    }), Ft(s)), i = p(u(t).children), o = 0; o < i.length; o++) {
                    var a = i[o];
                    J(F(a, "hx-swap-oob") || "true", a, r)
                }
                mt(r.tasks)
            }
        }))
    }

    function Xe(e) {
        return !z(e) && (j(e).webSocket.close(), 1)
    }

    function Ue(l) {
        var f = d(l, function(e) {
            return null != j(e).webSocket
        });
        f ? l.addEventListener(Ce(l)[0].trigger, function(e) {
            var t = j(f).webSocket,
                r = kt(l, f),
                n = Ot(l, "post"),
                i = n.errors,
                n = Nt(V(n.values, zt(l)), l);
            n.HEADERS = r, i && 0 < i.length ? lt(l, "htmx:validation:halted", i) : (t.send(JSON.stringify(n)), Te(l) && e.preventDefault())
        }) : ot(l, "htmx:noWebSocketSourceError")
    }

    function je(e) {
        var t = D.config.wsReconnectDelay;
        return "function" == typeof t ? t(e) : "full-jitter" === t ? (t = Math.min(e, 6), 1e3 * Math.pow(2, t) * Math.random()) : void ut('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"')
    }

    function Be(e, t, r) {
        for (var n = y(r), i = 0; i < n.length; i++) {
            var o = n[i].split(/:(.+)/);
            "connect" === o[0] && ze(e, o[1]), "swap" === o[0] && Ve(e, o[1])
        }
    }

    function ze(t, e) {
        var r = D.createEventSource(e);
        r.onerror = function(e) {
            ot(t, "htmx:sseError", {
                error: e,
                source: r
            }), We(t)
        }, j(t).sseEventSource = r
    }

    function Ve(o, a) {
        var u, l, s = d(o, $e);
        s ? (u = j(s).sseEventSource, l = function(e) {
            var t, r, n, i;
            We(s) ? u.removeEventListener(a, l) : (t = e.data, st(o, function(e) {
                t = e.transformResponse(t, null, o)
            }), r = Mt(o), n = _(o), i = Ft(o), ce(r.swapStyle, o, n, t, i), mt(i.tasks), lt(o, "htmx:sseMessage", e))
        }, j(o).sseListener = l, u.addEventListener(a, l)) : ot(o, "htmx:noSSESourceError")
    }

    function _e(e, t, r, n) {
        var o, a, i = d(e, $e);
        i ? (o = j(i).sseEventSource, a = function() {
            We(i) || (z(e) ? Zt(t, r, e) : o.removeEventListener(n, a))
        }, j(e).sseListener = a, o.addEventListener(n, a)) : ot(e, "htmx:noSSESourceError")
    }

    function We(e) {
        return !z(e) && (j(e).sseEventSource.close(), 1)
    }

    function $e(e) {
        return null != j(e).sseEventSource
    }

    function Je(e, t, r, n, i) {
        function o() {
            n.loaded || (n.loaded = !0, Zt(t, r, e))
        }
        i ? setTimeout(o, i) : o()
    }

    function Ze(o, a, e) {
        var t = !1;
        return B(r, function(n) {
            var i;
            s(o, "hx-" + n) && (i = F(o, "hx-" + n), t = !0, a.path = i, a.verb = n, e.forEach(function(e) {
                var t;
                e.sseEvent ? _e(o, n, i, e.sseEvent) : "revealed" === e.trigger ? (Me(), De(o)) : "intersect" === e.trigger ? (t = {}, e.root && (t.root = A(o, e.root)), e.threshold && (t.threshold = parseFloat(e.threshold)), new IntersectionObserver(function(e) {
                    for (var t = 0; t < e.length; t++)
                        if (e[t].isIntersecting) {
                            lt(o, "intersect");
                            break
                        }
                }, t).observe(o), ke(o, n, i, a, e)) : "load" === e.trigger ? Je(o, n, i, a, e.delay) : e.pollInterval ? (a.polling = !0, qe(o, n, i, e)) : ke(o, n, i, a, e)
            }))
        }), t
    }

    function Ge(e) {
        if ("text/javascript" === e.type || "" === e.type) {
            var t = P().createElement("script"),
                r = (B(e.attributes, function(e) {
                    t.setAttribute(e.name, e.value)
                }), t.textContent = e.textContent, t.async = !1, e.parentElement);
            try {
                r.insertBefore(t, e)
            } catch (e) {
                ut(e)
            } finally {
                r.removeChild(e)
            }
        }
    }

    function Ke(e) {
        v(e, "script") && Ge(e), B(S(e, "script"), function(e) {
            Ge(e)
        })
    }

    function Ye() {
        return document.querySelector("[hx-boost], [data-hx-boost]")
    }

    function Qe(e) {
        var t;
        return e.querySelectorAll ? (t = Ye() ? ", a, form" : "", e.querySelectorAll(n + t + ", [hx-sse], [data-hx-sse], [hx-ws], [data-hx-ws]")) : []
    }

    function et(r) {
        function e(e) {
            v(e.target, "button, input[type='submit']") && (j(r).lastButtonClicked = e.target)
        }
        r.addEventListener("click", e), r.addEventListener("focusin", e), r.addEventListener("focusout", function(e) {
            j(r).lastButtonClicked = null
        })
    }

    function tt(e) {
        var t, r;
        e.closest && e.closest(D.config.disableSelector) || (t = j(e)).initialized || (t.initialized = !0, lt(e, "htmx:beforeProcessNode"), e.value && (t.lastValue = e.value), Ze(e, t, r = Ce(e)) || "true" !== X(e, "hx-boost") || Oe(e, t, r), "FORM" === e.tagName && et(e), (r = F(e, "hx-sse")) && Be(e, t, r), (r = F(e, "hx-ws")) && Fe(e, t, r), lt(e, "htmx:afterProcessNode"))
    }

    function rt(e) {
        tt(e = H(e)), B(Qe(e), function(e) {
            tt(e)
        })
    }

    function nt(e) {
        return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
    }

    function it(e, t) {
        var r;
        return window.CustomEvent && "function" == typeof window.CustomEvent ? r = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: t
        }) : (r = P().createEvent("CustomEvent")).initCustomEvent(e, !0, !0, t), r
    }

    function ot(e, t, r) {
        lt(e, t, V({
            error: t
        }, r))
    }

    function at(e) {
        return "htmx:afterProcessNode" === e
    }

    function st(e, t) {
        B(tr(e), function(e) {
            try {
                t(e)
            } catch (e) {
                ut(e)
            }
        })
    }

    function ut(e) {
        console.error ? console.error(e) : console.log && console.log("ERROR: ", e)
    }

    function lt(e, t, r) {
        e = H(e), (r = null == r ? {} : r).elt = e;
        var n = it(t, r),
            i = (D.logger && !at(t) && D.logger(e, t, r), r.error && (ut(r.error), lt(e, "htmx:error", {
                errorInfo: r
            })), e.dispatchEvent(n)),
            r = nt(t);
        return i && r !== t && (r = it(r, n.detail), i = i && e.dispatchEvent(r)), st(e, function(e) {
            i = i && !1 !== e.onEvent(t, n)
        }), i
    }
    var ft = null;

    function ct() {
        return P().querySelector("[hx-history-elt],[data-hx-history-elt]") || P().body
    }

    function ht(e, t, r, n) {
        for (var i = x(localStorage.getItem("htmx-history-cache")) || [], o = 0; o < i.length; o++)
            if (i[o].url === e) {
                i.splice(o, 1);
                break
            } for (i.push({
                url: e,
                content: t,
                title: r,
                scroll: n
            }); i.length > D.config.historyCacheSize;) i.shift();
        for (; 0 < i.length;) try {
            localStorage.setItem("htmx-history-cache", JSON.stringify(i));
            break
        } catch (e) {
            ot(P().body, "htmx:historyCacheError", {
                cause: e,
                cache: i
            }), i.shift()
        }
    }

    function dt(e) {
        for (var t = x(localStorage.getItem("htmx-history-cache")) || [], r = 0; r < t.length; r++)
            if (t[r].url === e) return t[r];
        return null
    }

    function vt(e) {
        var t = D.config.requestClass,
            e = e.cloneNode(!0);
        return B(S(e, "." + t), function(e) {
            R(e, t)
        }), e.innerHTML
    }

    function gt() {
        var e = ct(),
            t = ft || location.pathname + location.search;
        lt(P().body, "htmx:beforeHistorySave", {
            path: t,
            historyElt: e
        }), D.config.historyEnabled && history.replaceState({
            htmx: !0
        }, P().title, window.location.href), ht(t, vt(e), P().title, window.scrollY)
    }

    function pt(e) {
        D.config.historyEnabled && history.pushState({
            htmx: !0
        }, "", e), ft = e
    }

    function mt(e) {
        B(e, function(e) {
            e.call()
        })
    }

    function yt(n) {
        var e = new XMLHttpRequest,
            i = {
                path: n,
                xhr: e
            };
        lt(P().body, "htmx:historyCacheMiss", i), e.open("GET", n, !0), e.setRequestHeader("HX-History-Restore-Request", "true"), e.onload = function() {
            var t, e;
            200 <= this.status && this.status < 400 ? (lt(P().body, "htmx:historyCacheMissLoad", i), e = (e = u(this.response)).querySelector("[hx-history-elt],[data-hx-history-elt]") || e, se(t = ct(), e, e = Ft(t)), mt(e.tasks), ft = n, lt(P().body, "htmx:historyRestore", {
                path: n
            })) : ot(P().body, "htmx:historyCacheMissLoadError", i)
        }, e.send()
    }

    function xt(e) {
        gt();
        var n, r, t = dt(e = e || location.pathname + location.search);
        t ? (r = u(t.content), se(n = ct(), r, r = Ft(n)), mt(r.tasks), document.title = t.title, window.scrollTo(0, t.scroll), ft = e, lt(P().body, "htmx:historyRestore", {
            path: e
        })) : D.config.refreshOnHistoryMiss ? window.location.reload(!0) : yt(e)
    }

    function bt(e) {
        var t = X(e, "hx-push-url");
        return t && "false" !== t || j(e).boosted && j(e).pushURL
    }

    function wt(e) {
        e = X(e, "hx-push-url");
        return "true" === e || "false" === e ? null : e
    }

    function St(e) {
        var t = X(e, "hx-indicator"),
            t = t ? T(e, t) : [e];
        return B(t, function(e) {
            e.classList.add.call(e.classList, D.config.requestClass)
        }), t
    }

    function Et(e) {
        B(e, function(e) {
            e.classList.remove.call(e.classList, D.config.requestClass)
        })
    }

    function Ct(e, t) {
        for (var r = 0; r < e.length; r++)
            if (e[r].isSameNode(t)) return 1
    }

    function Rt(e) {
        return "" !== e.name && null != e.name && !e.disabled && "button" !== e.type && "submit" !== e.type && "image" !== e.tagName && "reset" !== e.tagName && "file" !== e.tagName && ("checkbox" !== e.type && "radio" !== e.type || e.checked)
    }

    function qt(t, r, n, e, i) {
        var o, a, s;
        null == e || Ct(t, e) || (t.push(e), Rt(e) && (o = c(e, "name"), a = e.value, e.multiple && (a = p(e.querySelectorAll("option:checked")).map(function(e) {
            return e.value
        })), e.files && (a = p(e.files)), null != o && null != a && ((s = r[o]) ? Array.isArray(s) ? Array.isArray(a) ? r[o] = s.concat(a) : s.push(a) : Array.isArray(a) ? r[o] = [s].concat(a) : r[o] = [s, a] : r[o] = a), i) && Lt(e, n), v(e, "form") && B(e.elements, function(e) {
            qt(t, r, n, e, i)
        }))
    }

    function Lt(e, t) {
        e.willValidate && (lt(e, "htmx:validation:validate"), e.checkValidity() || (t.push({
            elt: e,
            message: e.validationMessage,
            validity: e.validity
        }), lt(e, "htmx:validation:failed", {
            message: e.validationMessage,
            validity: e.validity
        })))
    }

    function Ot(e, t) {
        var r = [],
            n = {},
            i = {},
            o = [],
            a = v(e, "form") && !0 !== e.noValidate,
            t = ("get" !== t && qt(r, i, o, O(e, "form"), a), qt(r, n, o, e, a), j(e)),
            u = (t.lastButtonClicked && (u = c(t.lastButtonClicked, "name")) && (n[u] = t.lastButtonClicked.value), X(e, "hx-include"));
        return u && B(T(e, u), function(e) {
            qt(r, n, o, e, a), v(e, "form") || B(e.querySelectorAll(Ee), function(e) {
                qt(r, n, o, e, a)
            })
        }), n = V(n, i), {
            errors: o,
            values: n
        }
    }

    function Tt(e, t, r) {
        return "" !== e && (e += "&"), e += encodeURIComponent(t) + "=" + encodeURIComponent(r)
    }

    function At(e) {
        var r, n, t = "";
        for (r in e) e.hasOwnProperty(r) && (n = e[r], Array.isArray(n) ? B(n, function(e) {
            t = Tt(t, r, e)
        }) : t = Tt(t, r, n));
        return t
    }

    function Ht(e) {
        var r, n, t = new FormData;
        for (r in e) e.hasOwnProperty(r) && (n = e[r], Array.isArray(n) ? B(n, function(e) {
            t.append(r, e)
        }) : t.append(r, n));
        return t
    }

    function kt(e, t, r) {
        t = {
            "HX-Request": "true",
            "HX-Trigger": c(e, "id"),
            "HX-Trigger-Name": c(e, "name"),
            "HX-Target": F(t, "id"),
            "HX-Current-URL": P().location.href
        };
        return Xt(e, "hx-headers", !1, t), void 0 !== r && (t["HX-Prompt"] = r), j(e).boosted && (t["HX-Boosted"] = "true"), t
    }

    function Nt(t, e) {
        var n, e = X(e, "hx-params");
        return e ? "none" === e ? {} : "*" === e ? t : 0 === e.indexOf("not ") ? (B(e.substr(4).split(","), function(e) {
            e = e.trim(), delete t[e]
        }), t) : (n = {}, B(e.split(","), function(e) {
            e = e.trim(), n[e] = t[e]
        }), n) : t
    }

    function It(e) {
        return c(e, "href") && 0 <= c(e, "href").indexOf("#")
    }

    function Mt(e) {
        var t = X(e, "hx-swap"),
            r = {
                swapStyle: j(e).boosted ? "innerHTML" : D.config.defaultSwapStyle,
                swapDelay: D.config.defaultSwapDelay,
                settleDelay: D.config.defaultSettleDelay
            };
        if (j(e).boosted && !It(e) && (r.show = "top"), t) {
            var n = y(t);
            if (0 < n.length) {
                r.swapStyle = n[0];
                for (var i = 1; i < n.length; i++) {
                    var s, u, l, o = n[i];
                    0 === o.indexOf("swap:") && (r.swapDelay = h(o.substr(5))), 0 === o.indexOf("settle:") && (r.settleDelay = h(o.substr(7))), 0 === o.indexOf("scroll:") && (u = (s = o.substr(7).split(":")).pop(), l = 0 < s.length ? s.join(":") : null, r.scroll = u, r.scrollTarget = l), 0 === o.indexOf("show:") && (u = (s = o.substr(5).split(":")).pop(), l = 0 < s.length ? s.join(":") : null, r.show = u, r.showTarget = l)
                }
            }
        }
        return r
    }

    function Dt(t, r, n) {
        var i = null;
        return st(r, function(e) {
            null == i && (i = e.encodeParameters(t, n, r))
        }), null != i ? i : ("multipart/form-data" === X(r, "hx-encoding") || v(r, "form") && "multipart/form-data" === c(r, "enctype") ? Ht : At)(n)
    }

    function Ft(e) {
        return {
            tasks: [],
            elts: [e]
        }
    }

    function Pt(e, t) {
        var i, o, r = e[0],
            e = e[e.length - 1];
        t.scroll && (i = null, t.scrollTarget && (i = A(r, t.scrollTarget)), "top" === t.scroll && (r || i) && ((i = i || r).scrollTop = 0), "bottom" === t.scroll) && (e || i) && ((i = i || e).scrollTop = i.scrollHeight), t.show && (i = null, t.showTarget && (o = t.showTarget, i = A(r, o = "window" === t.showTarget ? "body" : o)), "top" === t.show && (r || i) && (i = i || r).scrollIntoView({
            block: "start",
            behavior: D.config.scrollBehavior
        }), "bottom" === t.show) && (e || i) && (i = i || e).scrollIntoView({
            block: "end",
            behavior: D.config.scrollBehavior
        })
    }

    function Xt(e, t, r, n) {
        if (null == n && (n = {}), null == e) return n;
        var i = F(e, t);
        if (i) {
            var s, u, o = i.trim(),
                i = r;
            for (u in 0 === o.indexOf("javascript:") ? (o = o.substr(11), i = !0) : 0 === o.indexOf("js:") && (o = o.substr(3), i = !0), 0 !== o.indexOf("{") && (o = "{" + o + "}"), s = i ? Ut(e, function() {
                    return Function("return (" + o + ")")()
                }, {}) : x(o)) s.hasOwnProperty(u) && null == n[u] && (n[u] = s[u])
        }
        return Xt(l(e), t, r, n)
    }

    function Ut(e, t, r) {
        return D.config.allowEval ? t() : (ot(e, "htmx:evalDisallowedError"), r)
    }

    function jt(e, t) {
        return Xt(e, "hx-vars", !0, t)
    }

    function Bt(e, t) {
        return Xt(e, "hx-vals", !1, t)
    }

    function zt(e) {
        return V(jt(e), Bt(e))
    }

    function Vt(t, r, n) {
        if (null !== n) try {
            t.setRequestHeader(r, n)
        } catch (e) {
            t.setRequestHeader(r, encodeURIComponent(n)), t.setRequestHeader(r + "-URI-AutoEncoded", "true")
        }
    }

    function _t(t) {
        if (t.responseURL && "undefined" != typeof URL) try {
            var e = new URL(t.responseURL);
            return e.pathname + e.search
        } catch (e) {
            ot(P().body, "htmx:badResponseUrl", {
                url: t.responseURL
            })
        }
    }

    function Wt(e, t) {
        return e.getAllResponseHeaders().match(t)
    }

    function $t(e, t, r) {
        return e = e.toLowerCase(), r ? r instanceof Element || a(r, "String") ? Zt(e, t, null, null, {
            targetOverride: H(r),
            returnPromise: !0
        }) : Zt(e, t, H(r.source), r.event, {
            handler: r.handler,
            headers: r.headers,
            values: r.values,
            targetOverride: H(r.target),
            returnPromise: !0
        }) : Zt(e, t, null, null, {
            returnPromise: !0
        })
    }

    function Jt(e) {
        for (var t = []; e;) t.push(e), e = e.parentElement;
        return t
    }

    function Zt(e, t, n, r, i) {
        var s, o = null,
            a = null,
            u = ((i = null != i ? i : {}).returnPromise && "undefined" != typeof Promise && (s = new Promise(function(e, t) {
                o = e, a = t
            })), null == n && (n = P().body), i.handler || Gt);
        if (z(n)) {
            var l = i.targetOverride || _(n);
            if (null == l) ot(n, "htmx:targetError", {
                target: F(n, "hx-target")
            });
            else {
                var f = j(n);
                if (!f.requestInFlight) {
                    f.requestInFlight = !0;
                    var d = function() {
                            f.requestInFlight = !1, null != f.queuedRequests && 0 < f.queuedRequests.length && f.queuedRequests.shift()()
                        },
                        v = X(n, "hx-prompt");
                    if (v) {
                        var g = prompt(v);
                        if (null === g || !lt(n, "htmx:prompt", {
                                prompt: g,
                                target: l
                            })) return U(o), d(), s
                    }
                    v = X(n, "hx-confirm");
                    if (v && !confirm(v)) U(o), d();
                    else {
                        var m = new XMLHttpRequest,
                            y = kt(n, l, g),
                            v = (i.headers && (y = V(y, i.headers)), Ot(n, e)),
                            g = v.errors,
                            v = v.values,
                            S = (i.values && (v = V(v, i.values)), zt(n)),
                            v = V(v, S),
                            S = Nt(v, n),
                            R = ("get" !== e && null == X(n, "hx-encoding") && (y["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8"), null != t && "" !== t || (t = P().location.href), Xt(n, "hx-request")),
                            v = {
                                parameters: S,
                                unfilteredParameters: v,
                                headers: y,
                                target: l,
                                verb: e,
                                errors: g,
                                withCredentials: i.credentials || R.credentials || D.config.withCredentials,
                                timeout: i.timeout || R.timeout || D.config.timeout,
                                path: t,
                                triggeringEvent: r
                            };
                        if (lt(n, "htmx:configRequest", v))
                            if (t = v.path, e = v.verb, y = v.headers, S = v.parameters, (g = v.errors) && 0 < g.length) lt(n, "htmx:validation:halted", v), U(o), d();
                            else {
                                var A, N, g = t.split("#"),
                                    O = g[0],
                                    g = g[1];
                                if ("get" === e ? (A = O, 0 !== Object.keys(S).length && (A.indexOf("?") < 0 ? A += "?" : A += "&", A += At(S), g) && (A += "#" + g), m.open("GET", A, !0)) : m.open(e.toUpperCase(), t, !0), m.overrideMimeType("text/html"), m.withCredentials = v.withCredentials, m.timeout = v.timeout, !R.noHeaders)
                                    for (var k in y) y.hasOwnProperty(k) && (N = y[k], Vt(m, k, N));
                                var M, I = {
                                    xhr: m,
                                    target: l,
                                    requestConfig: v,
                                    pathInfo: {
                                        path: t,
                                        finalPath: A,
                                        anchor: g
                                    }
                                };
                                m.onload = function() {
                                    try {
                                        var e = Jt(n);
                                        if (u(n, I), Et(M), lt(n, "htmx:afterRequest", I), lt(n, "htmx:afterOnLoad", I), !z(n)) {
                                            for (var t = null; 0 < e.length && null == t;) {
                                                var r = e.shift();
                                                z(r) && (t = r)
                                            }
                                            t && (lt(t, "htmx:afterRequest", I), lt(t, "htmx:afterOnLoad", I))
                                        }
                                        U(o), d()
                                    } catch (e) {
                                        throw ot(n, "htmx:onLoadError", V({
                                            error: e
                                        }, I)), e
                                    }
                                }, m.onerror = function() {
                                    Et(M), ot(n, "htmx:afterRequest", I), ot(n, "htmx:sendError", I), U(a), d()
                                }, m.onabort = function() {
                                    Et(M), ot(n, "htmx:afterRequest", I), ot(n, "htmx:sendAbort", I), U(a), d()
                                }, m.ontimeout = function() {
                                    Et(M), ot(n, "htmx:afterRequest", I), ot(n, "htmx:timeout", I), U(a), d()
                                }, lt(n, "htmx:beforeRequest", I) ? (M = St(n), B(["loadstart", "loadend", "progress", "abort"], function(t) {
                                    B([m, m.upload], function(e) {
                                        e.addEventListener(t, function(e) {
                                            lt(n, "htmx:xhr:" + t, {
                                                lengthComputable: e.lengthComputable,
                                                loaded: e.loaded,
                                                total: e.total
                                            })
                                        })
                                    })
                                }), lt(n, "htmx:beforeSend", I), m.send("get" === e ? null : Dt(m, n, S))) : (U(o), d())
                            }
                        else U(o), d()
                    }
                    return s
                }
                O = "last", r && (R = j(r)) && R.triggerSpec && R.triggerSpec.queue && (O = R.triggerSpec.queue), null == f.queuedRequests && (f.queuedRequests = []), "first" === O && 0 === f.queuedRequests.length || "all" === O ? f.queuedRequests.push(function() {
                    Zt(e, t, n, r, i)
                }) : "last" === O && (f.queuedRequests = [], f.queuedRequests.push(function() {
                    Zt(e, t, n, r, i)
                }))
            }
        }
    }

    function Gt(a, s) {
        var f, c, d, t, h, u = s.xhr,
            l = s.target;
        lt(a, "htmx:beforeOnLoad", s) && (Wt(u, /HX-Trigger:/i) && he(u, "HX-Trigger", a), Wt(u, /HX-Push:/i) && (f = u.getResponseHeader("HX-Push")), Wt(u, /HX-Redirect:/i) ? window.location.href = u.getResponseHeader("HX-Redirect") : Wt(u, /HX-Refresh:/i) && "true" === u.getResponseHeader("HX-Refresh") ? location.reload() : (c = bt(a) || f, t = V({
            shouldSwap: 200 <= u.status && u.status < 400 && 204 !== u.status,
            serverResponse: h = u.response
        }, s), lt(l, "htmx:beforeSwap", t) && (l = t.target, h = t.serverResponse, t.shouldSwap ? (286 === u.status && Re(a), st(a, function(e) {
            h = e.transformResponse(h, u, a)
        }), c && gt(), d = Mt(a), l.classList.add(D.config.swappingClass), t = function() {
            try {
                var e = document.activeElement,
                    t = {};
                try {
                    t = {
                        elt: e,
                        start: e ? e.selectionStart : null,
                        end: e ? e.selectionEnd : null
                    }
                } catch (e) {}
                var n, i, r = Ft(l),
                    o = (ce(d.swapStyle, l, a, h, r), t.elt && !z(t.elt) && t.elt.id && (n = document.getElementById(t.elt.id)) && (t.start && n.setSelectionRange && n.setSelectionRange(t.start, t.end), n.focus()), l.classList.remove(D.config.swappingClass), B(r.elts, function(e) {
                        e.classList && e.classList.add(D.config.settlingClass), lt(e, "htmx:afterSwap", s)
                    }), s.pathInfo.anchor && (location.hash = s.pathInfo.anchor), Wt(u, /HX-Trigger-After-Swap:/i) && (z(i = a) || (i = P().body), he(u, "HX-Trigger-After-Swap", i)), function() {
                        var e;
                        B(r.tasks, function(e) {
                            e.call()
                        }), B(r.elts, function(e) {
                            e.classList && e.classList.remove(D.config.settlingClass), lt(e, "htmx:afterSettle", s)
                        }), c && (pt(e = f || wt(a) || _t(u) || s.pathInfo.finalPath || s.pathInfo.path), lt(P().body, "htmx:pushedIntoHistory", {
                            path: e
                        })), Pt(r.elts, d), Wt(u, /HX-Trigger-After-Settle:/i) && (z(e = a) || (e = P().body), he(u, "HX-Trigger-After-Settle", e))
                    });
                0 < d.settleDelay ? setTimeout(o, d.settleDelay) : o()
            } catch (e) {
                throw ot(a, "htmx:swapError", s), e
            }
        }, 0 < d.swapDelay ? setTimeout(t, d.swapDelay) : t()) : ot(a, "htmx:responseError", V({
            error: "Response Status Error Code " + u.status + " from " + s.pathInfo.path
        }, s)))))
    }
    var Kt = {};

    function Yt() {
        return {
            onEvent: function(e, t) {
                return !0
            },
            transformResponse: function(e, t, r) {
                return e
            },
            isInlineSwap: function(e) {
                return !1
            },
            handleSwap: function(e, t, r, n) {
                return !1
            },
            encodeParameters: function(e, t, r) {
                return null
            }
        }
    }

    function Qt(e, t) {
        Kt[e] = V(Yt(), t)
    }

    function er(e) {
        delete Kt[e]
    }

    function tr(e, r, n) {
        if (null == e) return r;
        null == r && (r = []), null == n && (n = []);
        var t = F(e, "hx-ext");
        return t && B(t.split(","), function(e) {
            "ignore:" == (e = e.replace(/ /g, "")).slice(0, 7) ? n.push(e.slice(7)) : n.indexOf(e) < 0 && (e = Kt[e]) && r.indexOf(e) < 0 && r.push(e)
        }), tr(l(e), r, n)
    }

    function rr(e) {
        "loading" !== P().readyState ? e() : P().addEventListener("DOMContentLoaded", e)
    }

    function nr() {
        !1 !== D.config.includeIndicatorStyles && P().head.insertAdjacentHTML("beforeend", "<style>                      ." + D.config.indicatorClass + "{opacity:0;transition: opacity 200ms ease-in;}                      ." + D.config.requestClass + " ." + D.config.indicatorClass + "{opacity:1}                      ." + D.config.requestClass + "." + D.config.indicatorClass + "{opacity:1}                    </style>")
    }

    function ir() {
        var e = P().querySelector('meta[name="htmx-config"]');
        return e ? x(e.content) : null
    }

    function or() {
        var e = ir();
        e && (D.config = V(D.config, e))
    }
    return rr(function() {
        or(), nr();
        var e = P().body;
        rt(e), window.onpopstate = function(e) {
            e.state && e.state.htmx && xt()
        }, setTimeout(function() {
            lt(e, "htmx:load", {})
        }, 0)
    }), D
}), ! function() {
    function mergeObjects(obj1, obj2) {
        for (var key in obj2) obj2.hasOwnProperty(key) && (obj1[key] = obj2[key])
    }
    htmx.defineExtension("include-vals", {
        onEvent: function(name, evt) {
            var includeValsElt, includeVals, valuesToInclude;
            "htmx:configRequest" === name && (includeValsElt = htmx.closest(evt.detail.elt, "[include-vals],[data-include-vals]"), includeValsElt) && (includeVals = includeValsElt.getAttribute("include-vals") || includeValsElt.getAttribute("data-include-vals"), valuesToInclude = eval("({" + includeVals + "})"), mergeObjects(evt.detail.parameters, valuesToInclude))
        }
    })
}(), ! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).MicroModal = t()
}(this, function() {
    "use strict";

    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function t(e) {
        return function(e) {
            if (Array.isArray(e)) return o(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || function(e, t) {
            var n;
            if (e) return "string" == typeof e ? o(e, t) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
        return n
    }
    n = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], i = function() {
        function o(e) {
            var n = e.targetModal,
                i = e.triggers,
                i = void 0 === i ? [] : i,
                r = e.onShow,
                r = void 0 === r ? function() {} : r,
                l = e.onClose,
                l = void 0 === l ? function() {} : l,
                d = e.openTrigger,
                d = void 0 === d ? "data-micromodal-trigger" : d,
                f = e.closeTrigger,
                f = void 0 === f ? "data-micromodal-close" : f,
                v = e.openClass,
                v = void 0 === v ? "is-open" : v,
                g = e.disableScroll,
                g = void 0 !== g && g,
                y = e.disableFocus,
                y = void 0 !== y && y,
                w = e.awaitCloseAnimation,
                w = void 0 !== w && w,
                k = e.awaitOpenAnimation,
                k = void 0 !== k && k,
                e = e.debugMode,
                e = void 0 !== e && e;
            ! function(e) {
                if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function")
            }(this), this.modal = document.getElementById(n), this.config = {
                debugMode: e,
                disableScroll: g,
                openTrigger: d,
                closeTrigger: f,
                openClass: v,
                onShow: r,
                onClose: l,
                awaitCloseAnimation: w,
                awaitOpenAnimation: k,
                disableFocus: y
            }, 0 < i.length && this.registerTriggers.apply(this, t(i)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this)
        }
        var i = o;
        return e(i.prototype, [{
            key: "registerTriggers",
            value: function() {
                for (var e = this, t = arguments.length, o = new Array(t), n = 0; n < t; n++) o[n] = arguments[n];
                o.filter(Boolean).forEach(function(t) {
                    t.addEventListener("click", function(t) {
                        return e.showModal(t)
                    })
                })
            }
        }, {
            key: "showModal",
            value: function() {
                var e = this,
                    t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add(this.config.openClass), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.awaitOpenAnimation ? this.modal.addEventListener("animationend", function t() {
                    e.modal.removeEventListener("animationend", t, !1), e.setFocusToFirstNode()
                }, !1) : this.setFocusToFirstNode(), this.config.onShow(this.modal, this.activeElement, t)
            }
        }, {
            key: "closeModal",
            value: function() {
                var o, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                    t = this.modal;
                this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.scrollBehaviour("enable"), this.activeElement && this.activeElement.focus && this.activeElement.focus(), this.config.onClose(this.modal, this.activeElement, e), this.config.awaitCloseAnimation ? (o = this.config.openClass, this.modal.addEventListener("animationend", function e() {
                    t.classList.remove(o), t.removeEventListener("animationend", e, !1)
                }, !1)) : t.classList.remove(this.config.openClass)
            }
        }, {
            key: "closeModalById",
            value: function(e) {
                this.modal = document.getElementById(e), this.modal && this.closeModal()
            }
        }, {
            key: "scrollBehaviour",
            value: function(e) {
                if (this.config.disableScroll) {
                    var t = document.querySelector("body");
                    switch (e) {
                        case "enable":
                            Object.assign(t.style, {
                                overflow: ""
                            });
                            break;
                        case "disable":
                            Object.assign(t.style, {
                                overflow: "hidden"
                            })
                    }
                }
            }
        }, {
            key: "addEventListeners",
            value: function() {
                this.modal.addEventListener("touchstart", this.onClick), this.modal.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onKeydown)
            }
        }, {
            key: "removeEventListeners",
            value: function() {
                this.modal.removeEventListener("touchstart", this.onClick), this.modal.removeEventListener("click", this.onClick), document.removeEventListener("keydown", this.onKeydown)
            }
        }, {
            key: "onClick",
            value: function(e) {
                e.target.hasAttribute(this.config.closeTrigger) && this.closeModal(e)
            }
        }, {
            key: "onKeydown",
            value: function(e) {
                27 === e.keyCode && this.closeModal(e), 9 === e.keyCode && this.retainFocus(e)
            }
        }, {
            key: "getFocusableNodes",
            value: function() {
                var e = this.modal.querySelectorAll(n);
                return Array.apply(void 0, t(e))
            }
        }, {
            key: "setFocusToFirstNode",
            value: function() {
                var e, t;
                if (!this.config.disableFocus) return 0 < (t = (e = this.getFocusableNodes()).filter(function(e) {
                    return !e.hasAttribute("data-micromodal-close")
                })).length && t[0].focus(), 0 === t.length && e[0].focus(), 0 === e.length ? null : void 0
            }
        }, {
            key: "retainFocus",
            value: function(e) {
                var o, t = (t = this.getFocusableNodes()).filter(function(e) {
                    return null !== e.offsetParent
                });
                this.modal.contains(document.activeElement) ? (o = t.indexOf(document.activeElement), e.shiftKey && 0 === o && (t[t.length - 1].focus(), e.preventDefault()), !e.shiftKey && 0 < t.length && o === t.length - 1 && (t[0].focus(), e.preventDefault())) : t[0].focus()
            }
        }]), o
    }(), a = null, r = function(e) {
        if (!document.getElementById(e)) return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(e, '"></div>')), !1
    }, s = function(e, t) {
        if (function(e) {
                e.length <= 0 && (console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'))
            }(e), t)
            for (var o in t) r(o);
        return !0
    };
    var n, i, a, r, s, l = {
        init: function(e) {
            var o = Object.assign({}, {
                    openTrigger: "data-micromodal-trigger"
                }, e),
                e = t(document.querySelectorAll("[".concat(o.openTrigger, "]"))),
                r = function(e, t) {
                    var o = [];
                    return e.forEach(function(e) {
                        var n = e.attributes[t].value;
                        void 0 === o[n] && (o[n] = []), o[n].push(e)
                    }), o
                }(e, o.openTrigger);
            if (!0 !== o.debugMode || !1 !== s(e, r))
                for (var l in r) {
                    var c = r[l];
                    o.targetModal = l, o.triggers = t(c), a = new i(o)
                }
        },
        show: function(e, t) {
            t = t || {};
            t.targetModal = e, !0 === t.debugMode && !1 === r(e) || (a && a.removeEventListeners(), (a = new i(t)).showModal())
        },
        close: function(e) {
            e ? a.closeModalById(e) : a.closeModal()
        }
    };
    return window.MicroModal = l
});