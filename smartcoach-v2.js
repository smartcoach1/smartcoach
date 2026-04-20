/**
 * Smart Coach V2
 * Config-driven widget. Reads from window.SmartCoachConfig.
 * Install:
 *   <script>window.SmartCoachConfig = { ... }</script>
 *   <script src="smartcoach-v2.js"></script>
 */

(function () {
  "use strict";

  // ─── 0. GUARD ────────────────────────────────────────────────────────────────
  // Exit silently if config is missing or invalid.
  // Protects against out-of-order script loading and failed config loads.

  var config = window.SmartCoachConfig;
  if (
    !config ||
    typeof config !== "object" ||
    !config.gym ||
    !config.pages ||
    typeof config.pages !== "object"
  ) return;

  // ─── 1. MATCH PAGE ───────────────────────────────────────────────────────────
  // Normalises URL before matching — strips trailing slash, query string, hash.
  // Applies fallback_mode logic on no match.

  function matchPage(config) {
    var raw  = window.location.pathname;
    var path = raw.split("?")[0].split("#")[0]; // strip query string and hash
    path = path === "/" ? "/" : path.replace(/\/$/, ""); // strip trailing slash

    // Direct match
    if (config.pages && config.pages[path]) {
      var matched = config.pages[path];
      if (matched.enabled === false) return null; // disabled — silent exit
      return matched;
    }

    // No match — apply fallback_mode
    var mode = config.fallback_mode || "silent_exit";

    if (mode === "default_page" && config.default_page) {
      return config.default_page;
    }

    return null; // silent_exit — render nothing
  }


  // ─── 2. BUILD HTML ───────────────────────────────────────────────────────────

  function buildHTML(page, gym) {
    var launcherText = page.launcher_text || "";

    // Coach identity — all-or-nothing rule.
    // Page must provide coach_name, avatar_url AND show_signoff to override.
    // If any one is missing, fall back to gym-level entirely. No mixed states.
    var hasPageIdentity = (
      page.coach_name &&
      page.avatar_url &&
      page.hasOwnProperty("show_signoff")
    );

    var coachName   = hasPageIdentity ? page.coach_name   : (gym.coach_name  || "");
    var avatarUrl   = hasPageIdentity ? page.avatar_url   : (gym.avatar_url  || "");
    var showSignoff = hasPageIdentity ? page.show_signoff : false;

    // Only show signoff if coach name exists
    showSignoff = showSignoff && !!coachName;

    var avatarStyle = avatarUrl
      ? "background-image:url('" + avatarUrl + "')"
      : "";

    var optionButtons = "";
    var options = (page.card1 && page.card1.options) ? page.card1.options.slice(0, 4) : [];
    for (var i = 0; i < options.length; i++) {
      optionButtons +=
        '<button class="sc2-option" data-key="' + options[i].key + '">' +
          options[i].label +
        '</button>';
    }

    return (
      '<div id="sc2-root">' +

        '<div class="sc2-launcher" id="sc2-launcher">' +
          (launcherText ? '<span class="sc2-launcher-text">' + launcherText + '</span>' : '') +
          '<span class="sc2-badge" id="sc2-badge">1</span>' +
        '</div>' +

        '<div class="sc2-card" id="sc2-card">' +

          '<div class="sc2-topbar">' +
            '<button class="sc2-close" id="sc2-close" aria-label="Close Smart Coach">&times;</button>' +
          '</div>' +

          '<div class="sc2-inner">' +

            '<div class="sc2-card1" id="sc2-card1">' +
              '<div class="sc2-coach-row">' +
                '<div class="sc2-avatar" style="' + avatarStyle + '"></div>' +
                '<div class="sc2-coach-meta">' +
                  '<div class="sc2-kicker">' + (page.card1 && page.card1.kicker ? page.card1.kicker : 'Quick question') + '</div>' +
                  '<div class="sc2-online"><span class="sc2-online-dot"></span>' + (coachName ? coachName + ' is online' : 'Coach online') + '</div>' +
                '</div>' +
              '</div>' +
              '<h3 class="sc2-headline">' + (page.card1 ? page.card1.headline : '') + '</h3>' +
              (page.card1 && page.card1.subheadline ? '<p class="sc2-subheadline">' + page.card1.subheadline + '</p>' : '') +
              '<div class="sc2-options">' + optionButtons + '</div>' +
            '</div>' +

            '<div class="sc2-card2" id="sc2-card2">' +
              '<div class="sc2-coach-row sc2-coach-row-answer">' +
                '<div style="position:relative;display:inline-block;">' +
                  '<div class="sc2-avatar" style="' + avatarStyle + '"></div>' +
                  '<span class="sc2-presence-dot"></span>' +
                '</div>' +
              '</div>' +
              '<div class="sc2-thinking" id="sc2-thinking">' +
                '<div class="sc2-thinking-label">Got it — here\'s what I\'d suggest.</div>' +
                '<div class="sc2-thinking-dots"><span></span><span></span><span></span></div>' +
              '</div>' +
              '<h4 class="sc2-response-headline" id="sc2-response-headline"></h4>' +
              '<p class="sc2-response-body" id="sc2-response-body"></p>' +
              (showSignoff ? '<p class="sc2-signoff" id="sc2-signoff" style="display:none;">\u2014 ' + coachName + '</p>' : '') +
              '<a class="sc2-cta" id="sc2-cta" href="#"></a>' +
              '<button class="sc2-back" id="sc2-back">Back</button>' +
            '</div>' +

          '</div>' +
        '</div>' +

      '</div>'
    );
  }


  // ─── 3. STYLES ───────────────────────────────────────────────────────────────

  function injectStyles(primaryColor) {
    var c = primaryColor || "#FF0400";

    var css = [
      "#sc2-root{",
        "--sc2-brand:" + c + ";",
        "--sc2-black:#000000;",
        "--sc2-text:#3E3E3E;",
        "--sc2-white:#FFFFFF;",
        "--sc2-border:rgba(0,0,0,0.13);",
        "--sc2-shadow:0 18px 48px rgba(0,0,0,0.16);",
        "--sc2-radius-card:18px;",
        "--sc2-radius-btn:10px;",
        "--sc2-radius-pill:999px;",
        "position:fixed;right:18px;bottom:39px;z-index:99999;",
        "font-family:'Open Sans',Arial,sans-serif;",
      "}",
      "#sc2-root *{box-sizing:border-box}",
      "#sc2-root .sc2-launcher{",
        "display:none;align-items:center;justify-content:center;",
        "min-height:57px;padding:0 16px;",
        "border-radius:var(--sc2-radius-pill);",
        "background:var(--sc2-brand);color:var(--sc2-white);",
        "border:1px solid rgba(255,255,255,0.4);",
        "font-family:Arial,sans-serif;font-size:14px;font-weight:700;",
        "box-shadow:0 10px 28px rgba(0,0,0,0.22);",
        "cursor:pointer;user-select:none;position:relative;",
        "transition:transform 0.2s ease,box-shadow 0.2s ease,opacity 0.2s ease;",
      "}",
      "#sc2-root .sc2-launcher:hover{transform:translateY(-1px);box-shadow:0 14px 32px rgba(0,0,0,0.28);opacity:0.92}",
      "#sc2-root .sc2-launcher.sc2-show{display:inline-flex}",
      "#sc2-root .sc2-launcher-text{display:inline-block}",
      "@keyframes sc2PulseGlow{0%{box-shadow:0 0 0 0 rgba(0,0,0,0.22)}70%{box-shadow:0 0 0 12px rgba(0,0,0,0)}100%{box-shadow:0 0 0 0 rgba(0,0,0,0)}}",
      "#sc2-root .sc2-launcher.sc2-pulse{animation:sc2PulseGlow 2.6s ease-out infinite}",
      "#sc2-root .sc2-badge{position:absolute;top:-8px;right:-8px;background:#E8221E;color:#fff;font-size:11px;font-weight:700;width:20px;height:20px;border-radius:50%;display:none;align-items:center;justify-content:center;line-height:20px;border:2px solid #fff;box-shadow:0 4px 10px rgba(0,0,0,0.22)}",
      "#sc2-root .sc2-card{display:none;width:325px;max-width:calc(100vw - 24px);margin-top:10px;background:var(--sc2-white);border:1px solid var(--sc2-border);border-radius:var(--sc2-radius-card);box-shadow:var(--sc2-shadow);overflow:hidden;transform:translateY(8px);opacity:0;transition:opacity 0.24s ease,transform 0.24s ease}",
      "#sc2-root .sc2-card.sc2-open{display:block;transform:translateY(0);opacity:1}",
      "#sc2-root .sc2-topbar{display:flex;justify-content:flex-end;padding:10px 10px 0 10px}",
      "#sc2-root .sc2-close{width:30px;height:30px;border:none;background:transparent;color:#777;font-size:20px;line-height:1;cursor:pointer;border-radius:50%;transition:color 0.2s ease}",
      "#sc2-root .sc2-close:hover{color:var(--sc2-brand)}",
      "#sc2-root .sc2-inner{padding:2px 22px 18px 22px}",
      "#sc2-root .sc2-coach-row{display:flex;align-items:flex-start;gap:6px;margin-bottom:10px}",
      "#sc2-root .sc2-avatar{width:38px;height:38px;min-width:38px;min-height:38px;border-radius:50%;background-size:cover;background-position:center;background-repeat:no-repeat;flex-shrink:0;margin-top:1px;box-shadow:0 0 0 3px rgba(0,0,0,0.07)}",
      "#sc2-root .sc2-coach-meta{display:flex;flex-direction:column;gap:1px}",
      "#sc2-root .sc2-kicker{font-family:Arial,sans-serif;font-size:11px;font-weight:700;color:var(--sc2-brand);text-transform:uppercase;letter-spacing:0.12em}",
      "#sc2-root .sc2-online{display:flex;align-items:center;gap:4px;font-size:11px;font-weight:400;color:#777;line-height:1.3}",
      "#sc2-root .sc2-online-dot{width:7px;height:7px;min-width:7px;border-radius:50%;background:#34c759;display:inline-block}",
      "@keyframes sc2PresenceBreathe{0%,100%{opacity:0.4}50%{opacity:1}}",
      "#sc2-root .sc2-presence-dot{position:absolute;bottom:0;right:0;width:9px;height:9px;border-radius:50%;background:#3ab56e;border:2px solid #fff;display:block;animation:sc2PresenceBreathe 3s ease-in-out infinite}",
      "#sc2-root .sc2-coach-row-answer .sc2-avatar{width:42px;height:42px;min-width:42px;min-height:42px}",
      "#sc2-root .sc2-card1{display:block}",
      "#sc2-root .sc2-headline{font-family:'Roboto',Arial,sans-serif;color:var(--sc2-black);font-size:20px;line-height:1.3;font-weight:700;margin:0 0 10px 0}",
      "#sc2-root .sc2-subheadline{color:var(--sc2-text);font-size:14px;line-height:1.5;margin:0 0 16px 0}",
      "#sc2-root .sc2-options{display:grid;gap:10px}",
      "#sc2-root .sc2-option{width:100%;text-align:left;padding:12px 13px;border:1px solid rgba(0,0,0,0.10);border-radius:var(--sc2-radius-btn);background:#fff;color:var(--sc2-black);font-family:'Open Sans',Arial,sans-serif;font-size:14px;line-height:1.35;cursor:pointer;transition:border-color 0.2s ease,background 0.2s ease,transform 0.15s ease}",
      "#sc2-root .sc2-option:hover{border-color:var(--sc2-brand);background:#f4f4f4;transform:translateY(-1px);box-shadow:0 6px 14px rgba(0,0,0,0.06)}",
      "#sc2-root .sc2-card2{display:none;text-align:left}",
      "#sc2-root .sc2-card2.sc2-visible{display:block}",
      "#sc2-root .sc2-coach-row-answer{margin-bottom:8px}",
      "#sc2-root .sc2-thinking{display:none;flex-direction:column;align-items:flex-start;gap:8px;min-height:24px;margin:4px 0 14px 0}",
      "#sc2-root .sc2-thinking-label{font-size:13px;color:rgba(0,0,0,0.55);font-weight:400;line-height:1.4}",
      "#sc2-root .sc2-thinking-dots{display:flex;gap:6px}",
      "@keyframes sc2Thinking{0%,80%,100%{opacity:0.35;transform:translateY(0)}40%{opacity:0.85;transform:translateY(-3px)}}",
      "#sc2-root .sc2-thinking-dots span{width:8px;height:8px;background:var(--sc2-brand);opacity:0.85;border-radius:50%;animation:sc2Thinking 0.9s infinite ease-in-out}",
      "#sc2-root .sc2-thinking-dots span:nth-child(2){animation-delay:0.15s}",
      "#sc2-root .sc2-thinking-dots span:nth-child(3){animation-delay:0.3s}",
      "#sc2-root .sc2-response-headline{font-family:'Roboto',Arial,sans-serif;color:var(--sc2-black);font-size:18px;line-height:1.35;font-weight:700;margin:0 0 10px 0}",
      "#sc2-root .sc2-response-body{color:var(--sc2-text);font-size:14px;line-height:1.55;margin:0 0 10px 0}",
      "#sc2-root .sc2-signoff{color:rgba(0,0,0,0.35);font-size:12px;font-weight:400;margin:0 0 18px 0;font-family:'Open Sans',Arial,sans-serif}",
      "#sc2-root .sc2-cta{display:none;align-items:center;justify-content:center;min-height:34px;width:100%;padding:0 16px;border-radius:8px;background:var(--sc2-brand);color:var(--sc2-white);text-decoration:none;font-family:Arial,sans-serif;font-size:14px;font-weight:700;border:none;box-shadow:0 4px 12px rgba(0,0,0,0.18),0 1px 3px rgba(0,0,0,0.12),inset 0 1px 0 rgba(255,255,255,0.15);transition:transform 0.18s ease,box-shadow 0.18s ease,opacity 0.18s ease}",
      "#sc2-root .sc2-cta:hover{transform:translateY(-2px) scale(1.02);box-shadow:0 12px 24px rgba(0,0,0,0.26);opacity:0.92}",
      "#sc2-root .sc2-cta:active{transform:translateY(1px);box-shadow:0 2px 6px rgba(0,0,0,0.14)}",
      "#sc2-root .sc2-cta.sc2-visible{display:inline-flex !important}",
      "#sc2-root .sc2-back{display:inline-block;margin-top:20px;border:none;background:none;padding:0;color:#444;font-family:'Open Sans',Arial,sans-serif;font-size:13px;text-decoration:underline;cursor:pointer;transition:color 0.2s ease}",
      "#sc2-root .sc2-back:hover{color:var(--sc2-brand)}",
      "@media(max-width:767px){",
        "#sc2-root{right:16px;left:auto;bottom:24px}",
        "#sc2-root .sc2-launcher.sc2-show{display:flex;width:66px;height:66px;min-height:66px;padding:0;border-radius:50%;font-size:0;line-height:0;align-items:center;justify-content:center;box-shadow:0 4px 10px rgba(0,0,0,0.15);background:#FFFFFF;border:1.5px solid var(--sc2-brand)}",
        "#sc2-root .sc2-launcher.sc2-show::before{content:'?';display:block;font-family:system-ui,-apple-system,sans-serif;font-size:26px;font-weight:700;line-height:1;color:var(--sc2-brand);transform:translateY(-1px)}",
        "#sc2-root .sc2-card{width:calc(100vw - 24px);max-width:calc(100vw - 24px);border-radius:16px}",
        "#sc2-root .sc2-inner{padding:0 14px 14px 14px}",
        "#sc2-root .sc2-headline{font-size:18px}",
        "#sc2-root .sc2-option{padding:12px 14px;background:#f9f9f9;border:1.5px solid #eeeeee}",
        "#sc2-root .sc2-option:active{transform:scale(0.98);border-color:var(--sc2-brand);background:#ffffff}",
      "}"
    ].join("");

    var el = document.createElement("style");
    el.id  = "sc2-styles";
    el.textContent = css;
    document.head.appendChild(el);
  }


  // ─── 4. EVENT TRACKING ───────────────────────────────────────────────────────

  var SC2_SUPABASE_URL = "https://wvjqwfygecjmauseekws.supabase.co";
  var SC2_SUPABASE_KEY = "sb_publishable_sPZ5ng3YgrZ-bR3ld5KNkQ_eP9j0CUU";

  function trackEvent(eventName, gymId, optionKey, optionLabel) {
    var payload = {
      event_name:   eventName,
      gym_id:       gymId || "unknown",
      page_url:     window.location.href,
      option_key:   optionKey || null,
      option_label: optionLabel || null,
      device_type:  window.innerWidth <= 767 ? "mobile" : "desktop"
    };

    fetch(SC2_SUPABASE_URL + "/rest/v1/events", {
      method:  "POST",
      headers: {
        "Content-Type":  "application/json",
        "apikey":        SC2_SUPABASE_KEY,
        "Authorization": "Bearer " + SC2_SUPABASE_KEY,
        "Prefer":        "return=minimal"
      },
      body: JSON.stringify(payload)
    }).catch(function () {
      // Fail silently — never break the widget
    });
  }


  // ─── 5. BEHAVIOUR ────────────────────────────────────────────────────────────

  function attachBehaviour(page, gym) {
    var card2Config   = page.card2 || {};
    var thinkingDelay = 2200;

    var alertDelay = (page.behaviour && page.behaviour.message_alert && page.behaviour.message_alert.enabled)
      ? (page.behaviour.message_alert.delay_seconds || 10) * 1000 : null;

    var popupDelay = (page.behaviour && page.behaviour.card_popup && page.behaviour.card_popup.enabled)
      ? (page.behaviour.card_popup.delay_seconds || 20) * 1000 : null;

    if (alertDelay !== null && popupDelay !== null && popupDelay <= alertDelay) {
      popupDelay = alertDelay + 1000;
    }

    var launcher = document.getElementById("sc2-launcher");
    var card     = document.getElementById("sc2-card");
    var closeBtn = document.getElementById("sc2-close");
    var card1    = document.getElementById("sc2-card1");
    var card2    = document.getElementById("sc2-card2");
    var thinking = document.getElementById("sc2-thinking");
    var resHead  = document.getElementById("sc2-response-headline");
    var resBody  = document.getElementById("sc2-response-body");
    var cta      = document.getElementById("sc2-cta");
    var backBtn  = document.getElementById("sc2-back");
    var badge    = document.getElementById("sc2-badge");
    var signoff  = document.getElementById("sc2-signoff");

    var storageKey = "sc2_seen_" + gym.gym_id + "_" + window.location.pathname;

    var lastOptionKey   = null;
    var lastOptionLabel = null;

    function openCard() {
      launcher.classList.remove("sc2-show", "sc2-pulse");
      card.classList.add("sc2-open");
    }

    function closeCard() {
      resetToCard1();
      card.classList.remove("sc2-open");
      launcher.classList.add("sc2-show", "sc2-pulse");
    }

    function resetToCard1() {
      cancelAll();
      card2.classList.remove("sc2-visible");
      thinking.style.display = "none";
      cta.classList.remove("sc2-visible");
      if (signoff) signoff.style.display = "none";
      resHead.innerHTML = "";
      resBody.innerHTML = "";
      card1.style.display = "block";
    }

    function hideBadge() {
      if (badge) badge.style.display = "none";
    }

    var revealActive = false;
    var thinkingTimer = null;

    function revealText(el, text, speed) {
      revealActive = true;
      el.innerHTML = "";
      var i = 0;
      function step() {
        if (!revealActive) return;
        if (i >= text.length) return;
        if (text.substr(i, 4) === "<br>") { el.innerHTML += "<br>"; i += 4; }
        else { el.innerHTML += text.charAt(i); i++; }
        setTimeout(step, speed);
      }
      step();
    }

    function cancelAll() {
      revealActive = false;
      if (thinkingTimer) { clearTimeout(thinkingTimer); thinkingTimer = null; }
    }

    function showResponse(key) {
      var item = card2Config[key];

      if (!item) {
        // Answer key missing — stop loading state and show fallback
        card1.style.display = "none";
        card2.classList.add("sc2-visible");
        thinking.style.display = "none";
        resHead.innerHTML = "Something went wrong.";
        resBody.innerHTML = "Please try another option.";
        cta.classList.remove("sc2-visible");
        return;
      }

      cancelAll();

      card1.style.display = "none";
      card2.classList.add("sc2-visible");
      resHead.innerHTML = "";
      resBody.innerHTML = "";
      cta.classList.remove("sc2-visible");
      thinking.style.display = "flex";

      thinkingTimer = setTimeout(function () {
        thinking.style.display = "none";
        resHead.innerHTML = item.headline;
        cta.textContent = item.cta.label;
        cta.href        = item.cta.url;
        // cta.type: "route" = internal navigation | "convert" = intent action (join/book/apply)
        cta.setAttribute("data-cta-type", item.cta.type || "route");
        cta.classList.add("sc2-visible");
        if (signoff) signoff.style.display = "block";
        revealText(resBody, item.body, 15);
      }, thinkingDelay);
    }

    launcher.addEventListener("click", function () { hideBadge(); clearTimers(); openCard(); trackEvent("widget_opened", gym.gym_id); });
    closeBtn.addEventListener("click", function () { hideBadge(); clearTimers(); closeCard(); trackEvent("widget_closed", gym.gym_id); });
    backBtn.addEventListener("click", function () { resetToCard1(); trackEvent("back_clicked", gym.gym_id); });

    document.querySelectorAll("#sc2-root .sc2-option").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var key   = btn.getAttribute("data-key");
        var label = btn.textContent.trim();
        lastOptionKey   = key;
        lastOptionLabel = label;
        trackEvent("option_selected", gym.gym_id, key, label);
        showResponse(key);
      });
    });

    cta.addEventListener("click", function () {
      trackEvent("cta_clicked", gym.gym_id, lastOptionKey, lastOptionLabel);
    });

    var alertTimer, popupTimer;

    function clearTimers() {
      clearTimeout(alertTimer);
      clearTimeout(popupTimer);
    }

    window.addEventListener("load", function () {
      launcher.classList.add("sc2-show", "sc2-pulse");
      if (sessionStorage.getItem(storageKey) === "1") return;

      if (alertDelay !== null) {
        alertTimer = setTimeout(function () {
          if (badge) badge.style.display = "flex";
        }, alertDelay);
      }

      if (popupDelay !== null) {
        popupTimer = setTimeout(function () {
          hideBadge();
          launcher.classList.remove("sc2-show", "sc2-pulse");
          card.classList.add("sc2-open");
          sessionStorage.setItem(storageKey, "1");
        }, popupDelay);
      }
    });
  }


  // ─── VALIDATION ──────────────────────────────────────────────────────────────
  // Checks option keys match card2 keys exactly.
  // Logs warnings but does not crash — safe for production.

  function validatePage(page) {
    var options = (page.card1 && page.card1.options) ? page.card1.options : [];
    var card2   = page.card2 || {};
    var valid   = true;

    var optionKeys = options.map(function(o) { return o.key; });
    var card2Keys  = Object.keys(card2);

    // Check every option key exists in card2
    optionKeys.forEach(function(key) {
      if (!card2[key]) {
        console.warn("[SmartCoach] option key '" + key + "' has no matching card2 answer.");
        valid = false;
      }
    });

    // Check card2 has no extra keys not in options
    card2Keys.forEach(function(key) {
      if (optionKeys.indexOf(key) === -1) {
        console.warn("[SmartCoach] card2 key '" + key + "' has no matching option.");
        valid = false;
      }
    });

    // Check CTA types are valid — "route" or "convert" only
    card2Keys.forEach(function(key) {
      var cta = card2[key] && card2[key].cta;
      if (cta && cta.type !== "route" && cta.type !== "convert") {
        console.warn("[SmartCoach] Invalid CTA type '" + cta.type + "' on key '" + key + "'. Use 'route' or 'convert'.");
        valid = false;
      }
    });

    return valid;
  }


  // ─── 5. INIT ─────────────────────────────────────────────────────────────────

  function init() {
    if (document.getElementById("sc2-root")) return; // already mounted — exit silently

    var gym  = config.gym || {};
    var page = matchPage(config);
    if (!page) return; // silent exit — no match, no render

    // Validate option/card2 alignment — warns but does not block render
    validatePage(page);

    var container = document.createElement("div");
    container.innerHTML = buildHTML(page, gym);
    document.body.appendChild(container.firstChild);
    injectStyles(gym.primary_color || null);
    attachBehaviour(page, gym);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
