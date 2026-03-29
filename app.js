(function () {
  const cfg = window.CBC_CONFIG || {};

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && value) el.textContent = value;
  };

  setText('conference-name', cfg.conferenceName);
  setText('event-title', cfg.eventTitle);
  setText('event-subtitle', cfg.eventSubtitle);
  setText('hero-description', cfg.heroDescription);
  setText('hero-date', cfg.dateLabel);
  setText('hero-location', cfg.cityLabel);
  setText('form-date-copy', `${cfg.dateLabel} · ${cfg.cityLabel}`);
  setText('footer-line', `${cfg.eventTitle} · ${cfg.cityLabel}`);

  const mapButton = document.getElementById('map-button');
  const routeMapLink = document.getElementById('route-map-link');
  const joinLateLink = document.getElementById('join-late-link');
  if (mapButton && cfg.fullRouteMapUrl) mapButton.href = cfg.fullRouteMapUrl;
  if (routeMapLink && cfg.fullRouteMapUrl) routeMapLink.href = cfg.fullRouteMapUrl;
  if (joinLateLink && cfg.joinLateUrl) joinLateLink.href = cfg.joinLateUrl;

  const routeList = document.getElementById('route-list');
  if (routeList && Array.isArray(cfg.route)) {
    routeList.innerHTML = cfg.route.map((stop, index) => `
      <li class="route-stop">
        <div class="route-number">${index + 1}</div>
        <h3>${stop.name}</h3>
        <address>${stop.address}</address>
        <p>${stop.note || ''}</p>
        <div class="route-links">
          <a class="inline-link" href="${stop.mapUrl}" target="_blank" rel="noopener">Directions</a>
        </div>
      </li>
    `).join('');
  }

  const kitFormSlot = document.getElementById('kit-form-slot');
  if (kitFormSlot && cfg.formEmbedHtml && cfg.formEmbedHtml.trim()) {
    kitFormSlot.innerHTML = cfg.formEmbedHtml;
  }

  const calendarButton = document.getElementById('calendar-button');
  if (calendarButton && cfg.startISO && cfg.endISO) {
    const ics = buildICS(cfg);
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    calendarButton.href = url;
    calendarButton.download = 'craft-brew-commerce.ics';
  }

  function formatICSDate(iso) {
    return new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
  }

  function escapeICS(text) {
    return (text || '')
      .replace(/\\/g, '\\\\')
      .replace(/;/g, '\\;')
      .replace(/,/g, '\\,')
      .replace(/\n/g, '\\n');
  }

  function buildICS(config) {
    const uid = `craft-brew-commerce-${Date.now()}@static-site`;
    const dtStamp = formatICSDate(new Date().toISOString());
    const dtStart = formatICSDate(config.startISO);
    const dtEnd = formatICSDate(config.endISO);
    const lines = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Craft Brew & Commerce//EN',
      'BEGIN:VEVENT',
      `UID:${uid}`,
      `DTSTAMP:${dtStamp}`,
      `DTSTART:${dtStart}`,
      `DTEND:${dtEnd}`,
      `SUMMARY:${escapeICS(config.eventTitle)}`,
      `LOCATION:${escapeICS(config.locationLabel)}`,
      `DESCRIPTION:${escapeICS(config.description + '\n\nRoute map: ' + (config.fullRouteMapUrl || ''))}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ];
    return lines.join('\r\n');
  }
})();
