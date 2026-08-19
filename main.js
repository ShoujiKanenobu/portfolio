(function () {
  "use strict";

  var C = CONTENT;

  var $  = function (sel) { return document.querySelector(sel); };
  var $$ = function (sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); };

  var LANG_KEY = "lang";
  var lang = "en";

  function isPair(v) {
    return v !== null && typeof v === "object" && !Array.isArray(v) &&
           ("en" in v || "ja" in v);
  }

  function pick(v) {
    if (!isPair(v)) return v;
    var out = v[lang];
    return (out === undefined || out === null || out === "") ? (v.en || "") : out;
  }

  function listOf(v) {
    v = pick(v);
    return Array.isArray(v) ? v : [];
  }

  function esc(str) {
    str = pick(str);
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function accentuate(str) {
    return esc(str).replace(/\*([^*]+)\*/g, "<em>$1</em>");
  }

  function notEmpty(list) { return listOf(list).length > 0; }

  function linkAttrs(href) {
    var h = String(href || "#");
    var external = /^https?:\/\//i.test(h);
    return 'href="' + esc(h) + '"' + (external ? ' target="_blank" rel="noopener noreferrer"' : "");
  }

  var ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  function sectionHead(eyebrow, heading, sub) {
    return '' +
      '<header class="section-head" data-reveal>' +
        (eyebrow ? '<p class="eyebrow">' + esc(eyebrow) + "</p>" : "") +
        "<h2>" + esc(heading) + "</h2>" +
        (sub ? "<p>" + esc(sub) + "</p>" : "") +
      "</header>";
  }

  function tagList(tags) {
    if (!notEmpty(tags)) return "";
    return '<ul class="tags">' + listOf(tags).map(function (t) {
      return '<li class="tag">' + esc(t) + "</li>";
    }).join("") + "</ul>";
  }

  function setMeta(sel, value) {
    var node = $(sel);
    if (node) node.setAttribute("content", value);
  }

  function setText(sel, value) {
    var node = $(sel);
    if (node) node.textContent = pick(value);
  }

  function renderHead() {
    var s = C.site;
    var title = pick(s.title);
    var desc  = pick(s.description);

    document.title = title;
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[name="description"]', desc);
    setMeta('meta[property="og:description"]', desc);
    $("[data-logo]").textContent = pick(s.logo);
  }

  function renderUI() {
    var u = C.ui;

    document.documentElement.setAttribute("lang", lang);

    setText("[data-skip]", u.skip);
    setText('[data-nav="work"]', u.nav.work);
    setText('[data-nav="experience"]', u.nav.experience);
    setText('[data-nav="contact"]', u.nav.contact);

    $("#theme-toggle").setAttribute("aria-label", pick(u.themeLabel));

    var burger = $("#nav-toggle");
    var open = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-label", pick(open ? u.menuClose : u.menuOpen));

    var langBtn = $("#lang-toggle");
    langBtn.setAttribute("aria-label", pick(u.langLabel));
    var label = langBtn.querySelector("[data-lang-label]");
    label.textContent = pick(u.langSwitch);
    label.setAttribute("lang", lang === "en" ? "ja" : "en");
  }

  function renderHero() {
    var h = C.hero;
    var a = C.about;

    var html = '<p class="hero__name">' + esc(h.name) + "</p>" +
               '<h1 class="hero__tagline">' + accentuate(h.tagline) + "</h1>";

    var text = '<p class="hero__intro">' + esc(h.intro) + "</p>";

    if (notEmpty(a.paragraphs)) {
      text += '<div class="hero__bio">' + listOf(a.paragraphs).map(function (p) {
        return "<p>" + esc(p) + "</p>";
      }).join("") + "</div>";
    }

    if (notEmpty(h.actions)) {
      text += '<div class="hero__actions">' + listOf(h.actions).map(function (act, i) {
        return "<a " + linkAttrs(act.href) + ' class="btn' + (i === 0 ? " btn--primary" : "") + '">' +
               esc(act.label) + (i === 0 ? ARROW : "") + "</a>";
      }).join("") + "</div>";
    }

    if (notEmpty(h.facts)) {
      text += '<div class="hero__facts">' + listOf(h.facts).map(function (f) {
        return '<div class="hero__fact"><strong>' + esc(f.value) + "</strong>" +
               "<span>" + esc(f.label) + "</span></div>";
      }).join("") + "</div>";
    }

    var media = '<div class="hero__media"><img src="' + esc(a.photo) +
                '" alt="' + esc(a.photoAlt) + '"></div>';

    html += '<div class="hero__main"><div class="hero__text">' + text + "</div>" + media + "</div>";

    if (notEmpty(a.skills)) {
      html += '<div class="hero__skills">' + listOf(a.skills).map(function (g) {
        return '<div class="hero__skill-group"><h2>' + esc(g.group) + "</h2>" +
               tagList(g.items) + "</div>";
      }).join("") + "</div>";
    }

    $("#hero").innerHTML = html;
  }

  function renderWork() {
    var w = C.work;

    $("#work-inner").innerHTML =
      sectionHead(w.eyebrow, w.heading, w.subheading) +
      '<div class="work__grid">' + listOf(w.projects).map(projectCard).join("") + "</div>";
  }

  function projectCard(p, i) {
    var image = pick(p.image);

    var html = '<article class="card' + (p.featured ? " card--featured" : "") +
               '" data-c="' + (i % 5) + '" data-reveal>';

    html += '<div class="card__media' + (/\.svg$/i.test(image) ? " card__media--icon" : "") + '">' +
            '<img src="' + esc(image) + '" alt="' + esc(p.imageAlt) + '" loading="lazy">' +
            (p.year ? '<span class="card__year">' + esc(p.year) + "</span>" : "") +
            "</div>";

    html += '<div class="card__body">';
    if (p.kicker) html += '<p class="card__kicker">' + esc(p.kicker) + "</p>";
    if (p.title)  html += '<h3 class="card__title">' + esc(p.title) + "</h3>";
    if (p.role)   html += '<p class="card__role">' + esc(p.role) + "</p>";
    if (p.description) html += '<p class="card__desc">' + esc(p.description) + "</p>";

    if (notEmpty(p.highlights)) {
      html += '<ul class="card__highlights">' + listOf(p.highlights).map(function (x) {
        return "<li>" + esc(x) + "</li>";
      }).join("") + "</ul>";
    }

    html += tagList(p.tags);

    if (notEmpty(p.links)) {
      html += '<div class="card__foot">' + listOf(p.links).map(function (l) {
        return "<a " + linkAttrs(l.href) + ' class="link">' + esc(l.label) + ARROW + "</a>";
      }).join("") + "</div>";
    }

    if (p.credit) html += '<p class="card__credit">' + esc(p.credit) + "</p>";

    html += "</div></article>";
    return html;
  }

  function renderExperience() {
    var e = C.experience;

    $("#experience-inner").innerHTML =
      sectionHead(e.eyebrow, e.heading, "") +
      '<div class="timeline">' + listOf(e.entries).map(function (item) {
        return '<div class="timeline__item" data-reveal>' +
          '<div class="timeline__when">' + esc(item.period) +
            (item.location ? '<span class="timeline__where">' + esc(item.location) + "</span>" : "") +
          "</div>" +
          "<div>" +
            '<h3 class="timeline__role">' + esc(item.role) +
              (item.company ? ' <span class="timeline__company">&middot; ' + esc(item.company) + "</span>" : "") +
            "</h3>" +
            (item.description ? '<p class="timeline__desc">' + esc(item.description) + "</p>" : "") +
          "</div>" +
        "</div>";
      }).join("") + "</div>";
  }

  function renderContact() {
    var c = C.contact;

    var left = "<div data-reveal>" +
      '<p class="eyebrow">' + esc(c.eyebrow) + "</p>" +
      "<h2>" + esc(c.heading) + "</h2>" +
      '<p class="contact__blurb">' + esc(c.blurb) + "</p>" +
      "</div>";

    var items = [{ label: c.email, href: "mailto:" + c.email }].concat(listOf(c.links));

    var right = '<div class="contact__links" data-reveal>' + items.map(function (l) {
      return "<a " + linkAttrs(l.href) + ">" + esc(l.label) + ARROW + "</a>";
    }).join("") + "</div>";

    $("#contact-inner").innerHTML = '<div class="contact">' + left + right + "</div>";
  }

  function renderFooter() {
    $("#footer-inner").innerHTML =
      "<span>&copy; " + new Date().getFullYear() + " " + esc(C.hero.name) + "</span>";
  }

  function renderAll() {
    renderHead();
    renderUI();
    renderHero();
    renderWork();
    renderExperience();
    renderContact();
    renderFooter();
    initReveal();
  }

  function initTheme() {
    $("#theme-toggle").addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  function initLang() {
    try {
      var saved = localStorage.getItem(LANG_KEY);
      if (saved === "en" || saved === "ja") lang = saved;
    } catch (e) {}

    $("#lang-toggle").addEventListener("click", function () {
      lang = lang === "en" ? "ja" : "en";
      try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
      renderAll();
    });
  }

  function initNav() {
    var nav    = $("#nav");
    var links  = $("#nav-links");
    var burger = $("#nav-toggle");

    var onScroll = function () { nav.classList.toggle("is-stuck", window.scrollY > 12); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    burger.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", pick(open ? C.ui.menuClose : C.ui.menuOpen));
    });

    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      }
    });

    var navLinks = $$("#nav-links a");
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    navLinks
      .map(function (a) { return document.querySelector(a.getAttribute("href")); })
      .filter(Boolean)
      .forEach(function (s) { spy.observe(s); });
  }

  var revealIO = null;

  function initReveal() {
    if (revealIO) revealIO.disconnect();

    revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;
        var node = entry.target;
        node.style.transitionDelay = Math.min(i * 70, 280) + "ms";
        node.classList.add("is-visible");
        revealIO.unobserve(node);
        setTimeout(function () { node.style.transitionDelay = ""; }, 900);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    $$("[data-reveal]").forEach(function (n) { revealIO.observe(n); });
  }

  initLang();
  renderAll();
  initTheme();
  initNav();
})();
