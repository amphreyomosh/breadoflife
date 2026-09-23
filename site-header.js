(function () {
  var currentPage = location.pathname.split("/").pop() || "index.html";
  var header = document.querySelector("header");
  if (!header) return;

  function icon(path) {
    return (
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      path +
      "</svg>"
    );
  }

  function link(title, description, href, path) {
    return (
      '<a class="bol-site-link" href="' +
      href +
      '">' +
      icon(path) +
      "<span><strong>" +
      title +
      "</strong><small>" +
      description +
      "</small></span></a>"
    );
  }

  function panel(title, columns, feature) {
    return (
      '<div class="bol-site-panel"><div class="bol-shell bol-site-panel-inner"><div class="bol-site-grid">' +
      columns
        .map(function (column) {
          return (
            '<div><h3 class="bol-site-col-title">' +
            column.title +
            '</h3><div class="bol-site-links">' +
            column.links.join("") +
            "</div></div>"
          );
        })
        .join("") +
      '<div class="bol-site-feature"><h3 class="bol-site-col-title">Coming up</h3><p>Sat, Oct 3 &middot; In person</p><h3>' +
      feature.title +
      '</h3><a href="events.html">See full calendar</a></div>' +
      "</div></div></div>"
    );
  }

  var aboutPanel = panel(
    "About",
    [
      {
        title: "About Us",
        links: [
          link(
            "Our Vision",
            "The contemplative future we're working toward.",
            "our-vision.html",
            '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
          ),
          link(
            "Our Equity Statement",
            "Our commitment to an inclusive, welcoming community.",
            "#",
            '<path d="M12 3v18M5 7h14M8 7l-3.5 7a3.5 3.5 0 0 0 7 0L8 7ZM16 7l-3.5 7a3.5 3.5 0 0 0 7 0L16 7Z"/>',
          ),
          link(
            "Our Leadership",
            "Meet the staff and board guiding the organization.",
            "our-leadership.html",
            '<circle cx="8.5" cy="8" r="3"/><path d="M2.5 19.5a6 6 0 0 1 12 0"/><circle cx="16.5" cy="9" r="2.4"/>',
          ),
        ],
      },
      {
        title: "Get Involved",
        links: [
          link(
            "Work at Bread of Life",
            "Open staff roles and how to apply.",
            "#",
            '<rect x="2.5" y="7.5" width="19" height="12" rx="2"/><path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5M2.5 13h19"/>',
          ),
          link(
            "Our Donors",
            "The generosity that makes this work possible.",
            "donate.html",
            '<rect x="3" y="9" width="18" height="4" rx="1"/><rect x="4.5" y="13" width="15" height="8" rx="1"/><path d="M12 9v12M12 9c-1.5-3-6-3-6 0s4.5 0 6 0Zm0 0c1.5-3 6-3 6 0s-4.5 0-6 0Z"/>',
          ),
        ],
      },
      {
        title: "Stories & Media",
        links: [
          link(
            "Our Stories",
            "Reflections from people in our community.",
            "#",
            '<path d="M4 5h16v14H4z"/><path d="M8 9h8M8 13h5"/>',
          ),
          link(
            "Podcast",
            "Conversations on contemplative life, old and new.",
            "#",
            '<rect x="9" y="2.5" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M9 21h6"/>',
          ),
        ],
      },
    ],
    { title: "Introduction to Centering Prayer" },
  );

  var programsPanel = panel(
    "Programs",
    [
      {
        title: "Online Courses",
        links: [
          link(
            "Foundations of Contemplative Prayer",
            "Self-paced audio sessions for beginning a daily practice.",
            "#",
            '<path d="M2 4.5C2 4.5 4.5 3 8 3s6 1.5 6 1.5v15S11.5 18 8 18s-6 1.5-6 1.5v-15ZM22 4.5C22 4.5 19.5 3 16 3s-6 1.5-6 1.5v15S12.5 18 16 18s6 1.5 6 1.5v-15Z"/>',
          ),
          link(
            "Listening for the Sacred",
            "A guided six-week course on discernment, taken from home.",
            "#",
            '<circle cx="12" cy="12" r="9"/><path d="M10 8.3v7.4l6.2-3.7-6.2-3.7Z" fill="currentColor" stroke="none"/>',
          ),
        ],
      },
      {
        title: "Workshops",
        links: [
          link(
            "Upcoming Workshops",
            "Browse the full calendar of in-person and online sessions.",
            "workshops.html",
            '<rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M16 2.5v4M8 2.5v4M3 9.5h18"/>',
          ),
          link(
            "Weekend Retreats",
            "Multi-day gatherings held at our Sacramento retreat house.",
            "events.html",
            '<path d="M12 20s-7-4.35-9.5-9A5.5 5.5 0 0 1 12 5.5 5.5 5.5 0 0 1 21.5 11c-2.5 4.65-9.5 9-9.5 9Z"/>',
          ),
        ],
      },
      {
        title: "More Programs",
        links: [
          link(
            "Community of Practice",
            "An ongoing circle for people building a shared contemplative life.",
            "#",
            '<circle cx="8.5" cy="8" r="3"/><path d="M2.5 19.5a6 6 0 0 1 12 0M16.5 9a2.4 2.4 0 0 1 0 4.8"/>',
          ),
          link(
            "Listen to Your Life",
            "A year-long formation program rooted in reflective practice.",
            "#",
            '<circle cx="12" cy="12" r="9"/><path d="m14.5 9.5-1.5 3.5-3.5 1.5L11 11l3.5-1.5Z"/>',
          ),
        ],
      },
    ],
    { title: "Introduction to Centering Prayer" },
  );

  var communityPanel = panel(
    "Community",
    [
      {
        title: "Who We Are",
        links: [
          link(
            "A Community of Practice",
            "Who gathers here and why.",
            "#",
            '<circle cx="8.5" cy="8" r="3"/><path d="M2.5 19.5a6 6 0 0 1 12 0M16.5 9a2.4 2.4 0 0 1 0 4.8"/>',
          ),
          link(
            "Vision Statement",
            "What we hope this community becomes.",
            "our-vision.html",
            '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
          ),
        ],
      },
      {
        title: "How We Gather",
        links: [
          link(
            "An Invitation",
            "What it looks like to join us.",
            "#",
            '<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3 6.5 9 6 9-6"/>',
          ),
          link(
            "Our Agreements",
            "The shared commitments that hold our circle.",
            "#",
            '<rect x="4.5" y="2.5" width="15" height="19" rx="2"/><path d="M8.5 8h7M8.5 12h7M8.5 16h4"/>',
          ),
        ],
      },
      {
        title: "Get Involved",
        links: [
          link(
            "COP Retreat RSVP",
            "Reserve your spot at the next retreat.",
            "events.html",
            '<rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M16 2.5v4M8 2.5v4M3 9.5h18"/>',
          ),
        ],
      },
    ],
    { title: "Introduction to Centering Prayer" },
  );

  function trigger(label, panelMarkup) {
    return (
      '<div class="bol-site-item" data-open="false"><button class="bol-site-trigger" type="button" aria-haspopup="true" aria-expanded="false">' +
      label +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg></button>' +
      panelMarkup +
      "</div>"
    );
  }

  header.className = "bol-site-header";
  header.id = "bolMasthead";
  header.innerHTML =
    '<div class="bol-shell bol-site-header-inner"><a class="bol-site-logo" href="index.html#top" aria-label="Bread of Life Homepage"><img src="https://images.squarespace-cdn.com/content/6a662e2b61e351419c14bc1c/da841121-67d7-4217-aa37-7107060eef73/bread+of+life+logo.png?content-type=image%2Fpng" alt="Bread of Life" /></a><div class="bol-site-menu" id="bolMenuWrapper"><nav class="bol-site-nav" aria-label="Primary Navigation"><a href="index.html#top">Home</a>' +
    trigger("About", aboutPanel) +
    trigger("Programs", programsPanel) +
    '<a href="spiritual_direction.html">Spiritual Direction</a>' +
    trigger("Community", communityPanel) +
    '<a href="contact.html">Contact</a></nav><div class="bol-site-actions"><a class="bol-site-ghost" href="donate.html">Ways to Give</a><a href="find-a-spiritual-director.html">Find a Spiritual Director</a></div></div><button class="bol-site-toggle" id="bolNavToggle" type="button" aria-expanded="false" aria-controls="bolMenuWrapper" aria-label="Open navigation menu"><span class="bol-site-burger" aria-hidden="true"><i></i><i></i><i></i></span></button></div><div class="bol-site-scrim" id="bolScrim"></div>';

  var toggle = document.getElementById("bolNavToggle");
  var items = Array.from(header.querySelectorAll(".bol-site-item"));
  var menu = document.getElementById("bolMenuWrapper");
  var closeTimers = new WeakMap();

  function syncScrolledHeader() {
    var isScrolled = window.scrollY > 0;
    header.classList.toggle("bol-site-scrolled", isScrolled);
    if (isScrolled) {
      header.style.setProperty(
        "background",
        "#ffffff",
        "important",
      );
    } else if (!header.classList.contains("bol-site-mega-open")) {
      header.style.removeProperty("background");
    }
  }

  function syncMegaHeader() {
    var isOpen = items.some(function (item) {
      return item.dataset.open === "true";
    });
    var isLargeScreen = window.innerWidth > 1024;
    header.classList.toggle("bol-site-mega-open", isOpen && isLargeScreen);
    if (isOpen && isLargeScreen) {
      header.style.setProperty("background", "#ffffff", "important");
    } else if (window.scrollY > 0) {
      header.style.setProperty(
        "background",
        "#ffffff",
        "important",
      );
    } else {
      header.style.removeProperty("background");
    }
  }

  window.addEventListener("scroll", syncScrolledHeader, { passive: true });
  syncScrolledHeader();

  function closeItems() {
    items.forEach(function (item) {
      var timer = closeTimers.get(item);
      if (timer) {
        clearTimeout(timer);
        closeTimers.delete(item);
      }
      item.dataset.open = "false";
      var button = item.querySelector(".bol-site-trigger");
      if (button) button.setAttribute("aria-expanded", "false");
    });
    syncMegaHeader();
  }
  function closeMenu() {
    document.body.classList.remove("bol-site-menu-open");
    menu.style.removeProperty("transform");
    menu.style.removeProperty("visibility");
    menu.style.removeProperty("pointer-events");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
    closeItems();
  }

  toggle.addEventListener("click", function () {
    var open = !document.body.classList.contains("bol-site-menu-open");
    document.body.classList.toggle("bol-site-menu-open", open);
    if (open && window.innerWidth <= 1024) {
      menu.style.setProperty("transform", "translateX(0)", "important");
      menu.style.setProperty("visibility", "visible", "important");
      menu.style.setProperty("pointer-events", "auto", "important");
    } else {
      menu.style.removeProperty("transform");
      menu.style.removeProperty("visibility");
      menu.style.removeProperty("pointer-events");
    }
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu",
    );
  });
  header.querySelectorAll("a").forEach(function (anchor) {
    anchor.addEventListener("click", closeMenu);
  });
  items.forEach(function (item) {
    var button = item.querySelector(".bol-site-trigger");
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      var timer = closeTimers.get(item);
      if (timer) {
        clearTimeout(timer);
        closeTimers.delete(item);
      }
      var open = item.dataset.open !== "true";
      closeItems();
      item.dataset.open = String(open);
      button.setAttribute("aria-expanded", String(open));
      syncMegaHeader();
    });
    item.addEventListener("mouseenter", function () {
      if (window.innerWidth > 1024) {
        var timer = closeTimers.get(item);
        if (timer) {
          clearTimeout(timer);
          closeTimers.delete(item);
        }
        closeItems();
        item.dataset.open = "true";
        button.setAttribute("aria-expanded", "true");
        syncMegaHeader();
      }
    });
    item.addEventListener("mouseleave", function () {
      if (window.innerWidth > 1024) {
        var timer = setTimeout(function () {
          item.dataset.open = "false";
          button.setAttribute("aria-expanded", "false");
          closeTimers.delete(item);
          syncMegaHeader();
        }, 350);
        closeTimers.set(item, timer);
      }
    });
  });
  document.getElementById("bolScrim").addEventListener("click", closeMenu);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
})();
