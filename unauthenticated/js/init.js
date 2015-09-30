/*!
 * Authentic Theme 16.01 (https://github.com/qooob/authentic-theme)
 * Copyright 2015 Ilia Rostovtsev <programming@rostovtsev.ru>
 * Licensed under MIT (https://github.com/qooob/authentic-theme/blob/master/LICENSE)
 */

$__theme_name__ = "authentic";
$___________ready = 0;
t___wi = window;
t__wi_p = t___wi.parent;
t___wi.parent.$___________right = 0;
typeof t__wi_p.$___________lrs_r_l == "undefined" ? t__wi_p.$___________lrs_r_l = 0 : false;
if (t___wi.location == t__wi_p.location) {
    t___wi.parent.$___________left = 0
}
typeof t__wi_p.$___________initial == "undefined" ? t__wi_p.$___________initial = 1 : false;
typeof settings_loader_left == "undefined" ? settings_loader_left = true : false;
typeof settings_mailbox_slash_delimiter == "undefined" ? settings_mailbox_slash_delimiter = true : false;
typeof settings_window_autoscroll == "undefined" ? settings_window_autoscroll = true : false;
typeof settings_right_reload == "undefined" ? settings_right_reload = true : false;
typeof settings_right_virtualmin_default == "undefined" ? settings_right_virtualmin_default = "sysinfo.cgi" : false;
typeof settings_right_cloudmin_default == "undefined" ? settings_right_cloudmin_default = "sysinfo.cgi" : false;
typeof settings_hotkeys_active == "undefined" ? settings_hotkeys_active = true : false;
typeof settings_hotkey_toggle_modifier == "undefined" ? settings_hotkey_toggle_modifier = "altKey" : false;
typeof settings_hotkey_toggle_key_webmin == "undefined" ? settings_hotkey_toggle_key_webmin = "w" : false;
typeof settings_hotkey_toggle_key_virtualmin == "undefined" ? settings_hotkey_toggle_key_virtualmin = "v" : false;
typeof settings_hotkey_toggle_key_cloudmin == "undefined" ? settings_hotkey_toggle_key_cloudmin = "c" : false;
typeof settings_hotkey_toggle_key_usermin == "undefined" ? settings_hotkey_toggle_key_usermin = "u" : false;
typeof settings_hotkey_toggle_key_webmail == "undefined" ? settings_hotkey_toggle_key_webmail = "m" : false;
typeof settings_hotkey_sysinfo == "undefined" ? settings_hotkey_sysinfo = "i" : false;
typeof settings_hotkey_favorites == "undefined" ? settings_hotkey_favorites = "f" : false;
typeof settings_hotkey_focus_search == "undefined" ? settings_hotkey_focus_search = "s" : false;
typeof settings_hotkey_reload == "undefined" ? settings_hotkey_reload = "r" : false;
typeof settings_hotkey_custom_1 == "undefined" ? settings_hotkey_custom_1 = false : false;
typeof settings_hotkey_custom_2 == "undefined" ? settings_hotkey_custom_2 = false : false;
typeof settings_hotkey_custom_3 == "undefined" ? settings_hotkey_custom_3 = false : false;
typeof settings_hotkey_custom_4 == "undefined" ? settings_hotkey_custom_4 = false : false;
typeof settings_hotkey_custom_5 == "undefined" ? settings_hotkey_custom_5 = false : false;
typeof settings_hotkey_custom_6 == "undefined" ? settings_hotkey_custom_6 = false : false;
typeof settings_hotkey_custom_7 == "undefined" ? settings_hotkey_custom_7 = false : false;
typeof settings_hotkey_custom_8 == "undefined" ? settings_hotkey_custom_8 = false : false;
typeof settings_hotkey_custom_9 == "undefined" ? settings_hotkey_custom_9 = false : false;
typeof settings_right_iconize_header_links == "undefined" ? settings_right_iconize_header_links = true : false;
typeof settings_sysinfo_easypie_charts == "undefined" ? settings_sysinfo_easypie_charts = true : false;
typeof settings_sysinfo_link_mini == "undefined" ? settings_sysinfo_link_mini = true : false;
typeof settings_window_customized_checkboxes_and_radios == "undefined" ? settings_window_customized_checkboxes_and_radios = true : false;
typeof settings_loader_top == "undefined" ? settings_loader_top = true : false;
typeof settings_loader_right == "undefined" ? settings_loader_right = true : false;
typeof settings_animation_left == "undefined" ? settings_animation_left = true : false;
settings_animation_left ? $settings_animation_left_slide_time = 220 : $settings_animation_left_slide_time = 0;
typeof settings_animation_tabs == "undefined" ? settings_animation_tabs = true : false;
settings_animation_tabs ? $settings_animation_tabs_slide_time = 280 : $settings_animation_tabs_slide_time = 0;
typeof settings_favorites == "undefined" ? settings_favorites = true : false;
try {
    t__wi_p.$
} catch (e) {
    t__wi_p = window
}

function __slm() {
    if (t__wi_p.$("aside").css("transform") == "none") {
        t__wi_p.$("aside").transition({
            x: 260
        }, 600, function () {
            if (t__wi_p.$(".__logo") && t__wi_p.$(".__logo").css("transform") == "none" && !t__wi_p.$(".mobile-menu-toggler:visible").length) {
                t__wi_p.$(".__logo").transition({
                    y: "-140px"
                }, 900)
            }
        });
        setTimeout(function () {
            t__wi_p.$(".switch-toggle").css("display", "table")
        }, 1)
    }
}
__slm();

function arrayIntersect(c, b) {
    var a = [];
    $.each(c, function (d, f) {
        if (b.match(new RegExp(f, "gi"))) {
            a.push(f)
        }
    });
    return !$.isEmptyObject(a)
}

function __lrs(d, b) {
    var a = t__wi_p.document.getElementById("iframe"),
        c = t__wi_p.document.activeElement,
        f = ["export", "export as csv.", "download", "upload"];
    if (c) {
        if (($(c).is("a") && $(c).attr("href") && ($(c).attr("href").indexOf("awstats/view.cgi") > -1))) {
            return
        }
    }
    a ? a = a.contentDocument.activeElement : a = false;
    if (a) {
        if ((t__wi_p.$('iframe[name="page"]').attr("src") !== "/csf/") && (($(a).is("a") && $(a).attr("href") && ($(a).attr("href").indexOf("webminlog.csv") > -1 || $(a).attr("href").indexOf("detach.cgi") > -1 || $(a).attr("href").indexOf("download.cgi") > -1 || ($("body.virtualmin-awstats") && $("body.virtualmin-awstats").length && $(a).attr("href").indexOf("view.cgi?config") > -1))) || ($(a).is("a") && $(a).text() && (arrayIntersect(f, $(a).text()))) || ($(a).is("input") && $(a).val() && (arrayIntersect(f, $(a).val()) || $(a).parents('form[action="create_vpn.cgi"]').length)))) {
            return
        }
    }
    typeof d == "undefined" ? d = false : d = true;
    typeof b == "undefined" ? b = 60 : false;
    if (settings_loader_right) {
        t__wi_p.$('iframe[name="page"]').animate({
            opacity: 0
        }, b);
        t__wi_p.$(".loader-container").addClass("loading-started");
        if (((t__wi_p.$("aside").css("transform") == "none" || t__wi_p.$("aside").css("transform") != "matrix(1, 0, 0, 1, 260, 0)") && !t__wi_p.$(".btn-menu-toggler").is(":visible"))) {
            t__wi_p.$(".loader-container").css("background-color", "#ededed").css("display", "block")
        } else {
            t__wi_p.setTimeout(function () {
                if (t___wi.parent.$___________right === 0 && t__wi_p.$___________lrs_r_l === 0) {
                    t__wi_p.$___________lrs_r_l = 1;
                    if (t__wi_p.$(".loader-container").hasClass("loading-started")) {
                        if (settings_loader_top && t__wi_p.t___p__xhr_l === 0) {
                            t__wi_p.NProgress.start()
                        }
                        t__wi_p.$(".loader-container").css("background-color", "#ededed").css("display", "block")
                    }
                    t__wi_p.setTimeout(function () {
                        t__wi_p.$(".loader .loader-close").show();
                        t__wi_p.$___________lrs_r_l = 0
                    }, 1500)
                }
            }, 1500)
        }
    } else {
        if (settings_loader_top && t__wi_p.t___p__xhr_l === 0) {
            t__wi_p.NProgress.start()
        }
    }
}

function product_name(a) {
    if (t__wi_p.$("#wrapper").data("server-manager") != -1) {
        return "Cloudmin"
    } else {
        if (t__wi_p.$("#wrapper").data("virtual-server") != -1) {
            return "Virtualmin"
        } else {
            if (t__wi_p.$("#wrapper").data("webmail") != -1 && !a) {
                return "Mail"
            } else {
                var b = t__wi_p.$("#wrapper").data("product");
                return b.charAt(0).toUpperCase() + b.slice(1)
            }
        }
    }
}

function __lre() {
    t__wi_p.$(".loader-container").removeClass("loading-started").css("background-color", "transparent").css("display", "none");
    t__wi_p.$('iframe[name="page"]').animate({
        opacity: 1
    }, 30, function () {});
    if (t__wi_p.$("aside").css("transform") == "none") {
        __slm()
    }
    if (__num()) {
        if (typeof t__wi_p.$('iframe[name="page"]').get(0).contentWindow.__dlm == "function") {
            $('iframe[name="page"]').get(0).contentWindow.__dlm()
        }
    }
    t__wi_p.$(".loader .loader-close").hide();
    if (settings_loader_top && t__wi_p.t___p__xhr_l === 0) {
        t__wi_p.NProgress.done()
    }
    if (typeof hide_mobile_menu == "function") {
        hide_mobile_menu()
    }
}

function ___csf() {
    var b = window,
        f = b.parent,
        a = f.document.getElementById("iframe"),
        j = a.contentDocument.getElementsByTagName("head")[0],
        c = a.contentDocument.createElement("script");
    c.type = "text/javascript";
    c.src = "/unauthenticated/js/package.min.js?1601";
    j.appendChild(c);
    if (f.$('iframe[name="page"]').contents().find("body.csf").length === 0) {
        a.contentWindow.onbeforeunload = function (k) {
            f.__lrs()
        };
        f.$('a[href="csf/"]').parent("li").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().prev("li").addClass("active");
        $csf = f.$('iframe[name="page"]').contents();
        $csf.find("head").append('               <link rel="shortcut icon" href="' + $_____link_full + '/images/favicon-webmin.ico">             <meta name="viewport" content="width=device-width, initial-scale=1.0">              <link href="' + $_____link_full + '/unauthenticated/css/package.min.css?1601" rel="stylesheet" type="text/css">         ');
        $.each(f.$('link[href*="/styles.css"]'), function () {
            if ($(this)) {
                $csf.find("head").append('<link href="' + $_____link_full + '/unauthenticated/css/styles.css" rel="stylesheet" type="text/css">')
            }
        });
        $csf.find('body:not(".mobile-menu-toggler")').on("click", function () {
            f.hide_mobile_menu()
        });
        $csf.find("style").remove();
        $csf.find("body").addClass("csf").css("background", "#f5f5f5");
        $csf.find("body").wrapInner('<div class="container-fluid col-lg-10 col-lg-offset-1">');
        $csf.find(".container-fluid").wrapInner('<div class="panel panel-default">');
        $csf.find(".panel-default").wrapInner('<div class="panel-body">');
        $csf.find(".panel-default").css("border-color", "#e9e9e9").css("border-top-width", "4px").prepend('<div class="panel-heading" style="text-align:center"><font size="+2">ConfigServer Security & Firewall</font></div>');
        $csf.find(".panel-body > img:first-child, .panel-body > b").remove();
        $csf.find("#CSFajax").css("border", "1px solid #f0f0f0");
        $csf.find("body table").each(function () {
            $(this).addClass("table table-striped table-condensed").removeAttr("style")
        });
        $csf.find("body table tr td, body table tr th").each(function () {
            $(this).removeAttr("style")
        });
        $csf.find("body table tr").each(function () {
            $(this).removeAttr("bgcolor")
        });
        $csf.find(".panel-body > h2:first-child").each(function () {
            $(this).text($(this).text().replace(":", ""))
        });
        $csf.find(".csf table.table-striped.table-condensed th").each(function () {
            if ($(this).html() == "Time To Live") {
                $(this).css("min-width", "100px")
            }
            if ($(this).html() == "&nbsp;") {
                $(this).css("min-width", "70px")
            }
        });

        function h() {
            $csf.find("#CSFajax").css("max-height", $(window).outerHeight() - $(window).outerHeight() / 2.4 + "px");
            container_fluid_size()
        }
        var i;
        $(window).resize(function () {
            clearTimeout(i);
            i = setTimeout(function () {
                h()
            }, 1000)
        });
        h();
        $csf.find(".csf table.table-striped.table-condensed tbody > tr > td > p").each(function () {
            if ($(this).text().indexOf("Your Score") >= 0) {
                $(this).next("p").remove();
                $(this).next("table").remove();
                $(this).next("table").remove();
                $(this).next("p").css("text-align", "center")
            }
        });
        if ($csf.find(".csf h2").text().indexOf("Ports listening for external connections and the executables running behind them") !== -1) {
            $csf.find("table").each(function () {
                if (!$(this).find("thead").length) {
                    var k = $(this),
                        l = $(this).find("tbody tr:first-child");
                    k.attr("style", "width: 100% !important");
                    k.attr("style", "min-width: 100% !important");
                    k.prepend("<thead>" + l.html() + "</thead>");
                    $(this).find("thead td").replaceTagName("th");
                    l.remove();
                    $(this).dataTable({
                        order: [],
                        aaSorting: [],
                        bDestroy: true,
                        bPaginate: false,
                        bInfo: false,
                        destroy: true,
                        oLanguage: {
                            sSearch: " "
                        }
                    });
                    $csf.find(".dataTables_filter input").attr("placeholder", "Filter")
                }
            })
        }
        if ($csf.find(".csf .table.table-striped.table-condensed tbody th:eq(1)").text().indexOf("A/D") !== -1 && $csf.find(".csf .table.table-striped.table-condensed tbody th:eq(2)").text().indexOf("IP address") !== -1) {
            $csf.find("table").each(function () {
                if (!$(this).find("thead").length) {
                    var k = $(this),
                        l = $(this).find("tbody tr:first-child");
                    k.prepend("<thead>" + l.html() + "</thead>");
                    l.remove();
                    $(this).dataTable({
                        order: [],
                        aaSorting: [],
                        bDestroy: true,
                        bPaginate: false,
                        bInfo: false,
                        destroy: true,
                        oLanguage: {
                            sSearch: " "
                        }
                    });
                    k.find('img[src^="csfimages/"]').each(function () {
                        $(this).attr("src", $(this).attr("src").replace("/csfimages/", "csfimages/"))
                    });
                    $csf.find(".dataTables_filter input").attr("placeholder", "Filter")
                }
            })
        }
        $csf.find(".csf td.section-gap:first-child").each(function () {
            $(this).parent("tr:first-child").remove();
            $(this).parent("tr:last-child").remove()
        });
        $csf.find(".csf td.section-title").each(function () {
            $(this).parent("tr").prev("tr").find("td.section-gap").parent("tr").remove();
            $(this).parent("tr").prev("tr").find("td.section-gap").parent("tr").remove()
        });
        $csf.find('.csf input[type="text"]').each(function () {
            if ($(this).attr("id") == "allowip") {
                $(this).removeAttr("style").attr("style", "border-color: #8cac8c; background-color: #93b893;")
            }
            if ($(this).attr("style") == "background-color: pink") {
                $(this).removeAttr("style").attr("style", "color: #fff; border-color: #d4a09f; background-color: #e0a9a8;")
            }
            if ($(this).attr("id") == "ignoreip") {
                $(this).removeAttr("style").attr("style", "border-color: #b3dae5; background-color: #bfd9e1;")
            }
        });
        $csf.find("body table tr th").each(function () {
            if (!$(this).parents("tbody").find("form").length && $(this).text().indexOf("Upgrade") >= 0) {
                $(this).parents("table").prev("br").remove();
                $(this).parents("table").remove()
            }
        });
        $csf.find(".csf pre").each(function () {
            if ($(this).text().indexOf("csf: v") >= 0 && $(this).text().match(/((?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+))$/)) {
                $csf_version = $(this).text().match(/((?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+))$/)[0];
                $(this).remove()
            }
        });
        $csf.find('a[href$="/csf/changelog.txt"]').addClass("btn btn-xs btn-default").attr("style", "padding:0 12px; height:19px;font-size:11px").text("View changelog");
        $csf.find(".csf .panel-heading font").each(function () {
            if ($(this).text().indexOf("ConfigServer Security & Firewall") >= 0) {
                $(this).html('<font size="+2">Firewall</font><span style="font-size:14px;display:block">ConfigServer Security & Firewall version ' + $csf_version + "</span>")
            }
        });
        $csf.find('table > tbody > tr:first-child > th:first-child, table[align="center"] > tbody > tr:first-child').each(function () {
            $(this).css("border-top", "3px solid #f0f0f0")
        });
        $csf.find('table[align="center"] > tbody > tr > td.section-title').each(function () {
            $(this).parent("tr").css("border-top", "3px solid #f0f0f0")
        });
        typeof settings_allowed_hostname == "undefined" ? settings_allowed_hostname = true : false;
        $csf.find("div.panel-body p:last-child").each(function () {
            if ($(this).text().indexOf("2006-20") >= 0) {
                if ($hostname == settings_allowed_hostname) {
                    $(this).remove();
                    $csf.find(".csf td").each(function () {
                        if ($(this).text().indexOf("able to provide this and other products") >= 0) {
                            $(this).parents("table").remove()
                        }
                    })
                } else {
                    $(this).css("font-size", "12px").css("margin-top", "12px")
                }
            }
        });
        if ($csf.find('.csf select[name="dur"]')[0]) {
            var g = $csf.find('.csf select[name="dur"]')[0].nextSibling;
            if (g.nodeValue == ".") {
                $(g).remove()
            }
        }
        $csf.find('.csf select:not([name="do"], [name="dur"]), .csf input:not([name="comment"], [name="ip"], [name="ports"], [name="timeout"], [aria-controls*="DataTables_Table_"])').each(function () {
            $(this).addClass("heighter-34")
        });
        $csf.find(".csf #paginatediv2.paginationstyle > select").each(function () {
            $(this).attr("style", "vertical-align: baseline !important")
        });
        $csf.find(".csf #paginatediv2 > a").each(function () {
            $(this).attr("style", "vertical-align: baseline !important")
        });
        $csf.find(".csf p > select").each(function () {
            $(this).attr("style", "vertical-align: baseline !important")
        });
        $csf.find('img[src="csfimages/loader.gif"]').each(function () {
            $(this).attr("src", "" + $_____link_full + "/images/loader-horizontal.gif").css("margin-left", "10px")
        });
        $csf.find(".paginationstyle a").each(function () {
            $(this).addClass("btn btn-default")
        });
        $csf.find('img[src^="lfd_"], img[src^="/csf/lfd_"]').each(function () {
            $(this).parents("table").removeClass("table-striped")
        });
        $csf.find('img[src^="csfimages/delete.png"]').each(function () {
            $(this).replaceWith('<i class="fa fa-unlock text-success" style="font-size: 1.1em; vertical-align: middle;"></i>')
        });
        $csf.find('img[src^="csfimages/perm.png"]').each(function () {
            $(this).replaceWith('<i class="fa fa-lock text-danger" style="font-size: 1.1em; vertical-align: middle;"></i>')
        });
        $csf.find(".csf fieldset legend b").each(function () {
            if ($(this).text().indexOf("Edit ConfigServer Firewall") >= 0) {
                $submit_changes = $csf.find('input[value="Change"]');
                $submit_changes.addClass("csf-submit_changes");
                $submit_changes.on("click", function () {
                    $csf.find('input[value="saveconf"]').parent("form").submit()
                })
            }
        });

        function d() {
            $csf.find('textarea[name="formdata"]').each(function (k, n) {
                var m = $(this);
                $parent_width = m.parent("td").width();
                var l = f.$('iframe[name="page"]').get(0).contentWindow.CodeMirror.fromTextArea(n, {
                    mode: {
                        name: "rpm-spec"
                    },
                    tabMode: "indent",
                    matchBrackets: true,
                    lineNumbers: true,
                    lineWrapping: true,
                    indentUnit: 4
                });
                $window_height = ($(window).outerHeight() - ($(window).outerHeight() / 2));
                l.setSize($parent_width, $window_height);
                $(window).resize(function () {
                    $parent_width = m.parent("td").width();
                    $window_height = ($(window).outerHeight() - ($(window).outerHeight() / 2));
                    l.setSize($parent_width, $window_height)
                })
            })
        }
        setTimeout(function () {
            if (typeof f.$('iframe[name="page"]').get(0).contentWindow.CodeMirror == "function") {
                d()
            } else {
                setTimeout(function () {
                    if (typeof f.$('iframe[name="page"]').get(0).contentWindow.CodeMirror == "function") {
                        d()
                    } else {
                        setTimeout(function () {
                            d()
                        }, 10)
                    }
                }, 140)
            }
        }, 50);
        $("#iframe").contents().find("body").on("keydown", function (k) {
            f.search_control(k);
            f.shortcut_control(k)
        });
        if (f.$("#open_webmin").length > 0 && f.$(".switch-toggle input:checked").attr("id") != "open_webmin") {
            f.t__s("open_webmin")
        }
        f.__dlm("csf/");
        t__au__c___r(1, 1);
        if (f.$___________initial === 1) {
            setTimeout(function () {
                f.__lre()
            }, 400)
        } else {
            setTimeout(function () {
                f.__lre()
            }, 250)
        }
        setTimeout(function () {
            if (!f.$('ul.sub li.sub_active a[target="page"][href="csf/"]').length) {
                f.__dlm("csf/")
            }
        }, 200)
    }
}

function s(b) {
    var c = document.getElementsByTagName("head")[0];
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = b;
    c.appendChild(a)
}
t__wi_p.$('iframe[name="page"]').unbind("load");
t__wi_p.$('iframe[name="page"]').on("load", function () {
    var b = t__wi_p.$('iframe[name="page"]').contents();
    if (b && b.find('iframe[name="page"]').length) {
        console.log("Error! Entered fail state.. Authentic Theme is reloading...");
        t___wi.top.location.reload();
        return
    }
    var a = false;
    if (b && b.find("title").text() && b.find("title").text().indexOf("ConfigServer Security & Firewall") > -1) {
        a = true
    }
    if (__num() && !a) {
        t__wi_p.__lre()
    }
    if ($("body").find(".form-signin-banner").length === 1 || $("body").find('form[action*="session_login"]').length === 1) {
        t__wi_p.location = t___wi.location.origin
    }
    ____iframe___ = t__wi_p.$("#iframe")[0];
    ____iframe___ && ____iframe___.contentWindow.focus();
    $("body").on("shown.bs.modal", ".modal.in", function () {
        $(this).focus()
    });
    setTimeout(function () {
        t__m__m(false, true);
        t__wi_p.$___________m_locked = 0;
        t__au__c___r(0, 0)
    }, 200);
    setTimeout(function () {
        t__wi_p.$___________initial = 0
    }, 1000);
    $("body").find('a[href*="virtual-server/switch_user.cgi"]').attr("target", "_parent");
    if (b && !b.text().match(/___authentic_theme_footer___/)) {
        if (a) {
            t__wi_p.___csf();
            return
        }
        __lre();
        s("/unauthenticated/js/authentic.min.js?1601")
    }
    if (settings_loader_top && t__wi_p.t___p__xhr_l === 0) {
        t__wi_p.NProgress.done()
    }
    t___wi.parent.$___________right = 1
});
$(function () {
    if ($("html.session_login").length) {
        if (t__wi_p.$("aside").length) {
            t__wi_p.location.href = "/"
        }
        $("form").on("click", 'button[type="submit"]', function (a) {
            a.preventDefault();
            $(this).prop("disabled", "true").removeClass("btn-primary").addClass("btn-default").find(".fa-sign-in").removeClass("fa-sign-in").addClass("fa fa-circle-o-notch faa-spin faa-slow animated");
            $(this).parents("form").submit()
        })
    }
    if (typeof $access_level != "undefined" && $access_level != 0) {
        settings_right_virtualmin_default = "sysinfo.cgi";
        settings_right_cloudmin_default = "sysinfo.cgi"
    }
    $___________ready = 1
});

function __num() {
    var a = $.url(t___wi.location),
        b = a.attr("path");
    if ((b && b.indexOf("/webmin/edit_themes.cgi") > -1 && t__wi_p.location.search == "?updating") || (b && b.indexOf("/webmin/edit_themes.cgi") > -1 && t__wi_p.location.search == "?updating-processing") || (b && b.indexOf("/webmin/install_theme.cgi") > -1 && t__wi_p.location.search == "?updating-processing") || (b && b.indexOf("/webmin/install_theme.cgi") > -1 && t__wi_p.location.search == "?updating-finished") || (b && b.indexOf("/webmin/edit_webmincron.cgi") > -1 && (t__wi_p.location.search == "?recollect" || t__wi_p.location.search == "?recollecting" || t__wi_p.location.search == "?recollect-system-status" || t__wi_p.location.search == "?recollect" || t__wi_p.location.search == "?recollecting-system-status")) || (b && b.indexOf("/webmin/delete_webmincron.cgi") > -1 && (t__wi_p.location.search == "?recollecting-system-status" || t__wi_p.location.search == "?recollect-system-status" || t__wi_p.location.search == "?recollect-finished" || t__wi_p.location.search == "?recollecting-finished" || t__wi_p.location.search == "?recollecting-package-updates")) || (b && b.indexOf("/package-updates/index.cgi") > -1 && (t__wi_p.location.search == "?recollect" || t__wi_p.location.search == "?recollecting" || t__wi_p.location.search == "?recollecting-package-updates" || t__wi_p.location.search == "?recollecting-package-updates-processing")) || (b && b.indexOf("/package-updates/update.cgi") > -1 && (t__wi_p.location.search == "?recollect" || t__wi_p.location.search == "?recollecting" || t__wi_p.location.search == "?recollecting-package-updates" || t__wi_p.location.search == "?recollecting-package-updates-processing" || t__wi_p.location.search == "?recollecting-finished"))) {
        return false
    } else {
        return true
    }
}
var $__was = function () {
    if ($("pre") && $("pre").length > 0 && $("pre").length <= 2) {
        if (__num()) {
            __lre()
        }
        $("body").unbind("mousewheel");
        t___wi.clearInterval($__was_runner);
        refresh = function () {
            $("body, html").animate({
                scrollTop: $(document).height()
            }, 200)
        };
        refresher = t___wi.setInterval(refresh, 201);
        setTimeout(function () {
            $("body").bind("mousewheel", function (a) {
                if (typeof refresher != "undefined") {
                    t___wi.clearInterval(refresher)
                }
                delete refresh;
                delete refresher;
                delete $__was_runner;
                $("body").unbind("mousewheel");
                $(this).off();
                setTimeout(function () {
                    $("html").bind("mousewheel", function (b) {
                        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                            $("html").unbind("mousewheel");
                            $(this).off();
                            if (settings_window_autoscroll && t___wi.location != t__wi_p.location && typeof $__was_runner_is_done == "undefined") {
                                $__was_runner = t___wi.setInterval($__was, 201)
                            }
                        }
                    })
                }, 200)
            })
        }, 0)
    }
};
if (settings_window_autoscroll && t___wi.location != t__wi_p.location) {
    $__was_runner = t___wi.setInterval($__was, 201)
};
