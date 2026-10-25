"use strict";
// 화면 출력 기능입니다. 평소에는 이 파일을 수정하지 않아도 됩니다.
(() => {
  const data = window.PORTFOLIO_CONTENT;
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, value) => {
    const item = document.createElement(tag);
    if (cls) item.className = cls;
    if (value !== undefined && value !== null) item.textContent = String(value);
    return item;
  };
  const text = (parent, tag, cls, value) => parent.appendChild(el(tag, cls, value));
  const paragraphs = (parent, values, cls = 'small-paragraph') =>
    (values || []).forEach(value => text(parent, 'p', cls, value));
  const links = (parent, values, cls = 'entry-links') => {
    const available = (values || []).filter(x => x.url && x.url.trim());
    if (!available.length) return;
    const wrap = el('div', cls);
    for (const entry of available) {
      const a = el('a', '', entry.label);
      a.href = entry.url;
      if (/^https?:\/\//.test(entry.url)) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
      wrap.appendChild(a);
    }
    parent.appendChild(wrap);
  };

  // Header
  const p = data.profile;
  document.title = `${p.name} — Research`;
  const header = $('intro');
  const introCopy = el('div', 'intro-copy');
  text(introCopy, 'h1', '', p.name);
  text(introCopy, 'p', 'affiliation', p.affiliation);
  links(introCopy, p.links, 'profile-links');
  paragraphs(introCopy, p.intro, '');
  // Interests are a single quiet line, not a separate section.
  if (p.interests && p.interests.length) {
    const interests = el('div', 'interests');
    text(interests, 'p', 'interests-items', p.interests.join(' · '));
    introCopy.appendChild(interests);
  }
  header.appendChild(introCopy);
  if (p.portrait) {
    const img = el('img', 'portrait');
    img.src = p.portrait;
    img.alt = `Portrait of ${p.name}`;
    header.appendChild(img);
  } else {
    const initials = p.name.split(' ').map(s => s[0]).join('').slice(0, 2).toUpperCase();
    const avatar = el('div', 'portrait portrait-monogram', initials);
    avatar.setAttribute('aria-label', `${p.name} monogram`);
    header.appendChild(avatar);
  }

  // Selected research
  const index = $('research-index');
  const researchList = $('research-list');
  (data.research || []).forEach((item, i) => {
    const jump = el('a', '');
    jump.href = `#${item.id}`;
    jump.appendChild(el('span', 'research-index-number', String(i + 1).padStart(2, '0')));
    jump.appendChild(document.createTextNode(item.shortTitle || item.title));
    index.appendChild(jump);

    const article = el('article', 'research-entry');
    article.id = item.id;
    if (item.image) {
      const image = el('img', 'research-image');
      image.src = item.image;
      image.alt = item.imageAlt || item.title;
      image.loading = i === 0 ? 'eager' : 'lazy';
      article.appendChild(image);
    } else {
      article.classList.add('no-image');
    }
    const body = el('div', 'research-body');
    text(body, 'h3', 'research-title', item.title);
    if (item.subtitle) text(body, 'p', 'research-subtitle', item.subtitle);
    if (item.question) text(body, 'p', 'question', item.question);
    paragraphs(body, item.paragraphs, '');
    if (item.note) text(body, 'p', 'research-note', item.note);
    links(body, item.links);

    if (item.details && item.details.length) {
      const more = el('details', 'research-more');
      text(more, 'summary', '', item.detailsTitle || 'Details');
      const detailInner = el('div', 'details-inner');
      item.details.forEach(section => {
        const area = el('section', 'details-section');
        text(area, 'h4', '', section.title);
        paragraphs(area, section.paragraphs, '');
        detailInner.appendChild(area);
      });
      more.appendChild(detailInner);
      body.appendChild(more);
    }
    article.appendChild(body);
    researchList.appendChild(article);
  });

  // Earlier research
  (data.earlierResearch || []).forEach(item => {
    const article = el('article', 'earlier-entry');
    text(article, 'h3', 'entry-heading', item.institution);
    text(article, 'p', 'meta', [item.position, item.advisor].filter(Boolean).join(' · '));
    paragraphs(article, item.paragraphs);
    links(article, item.links);
    $('earlier-list').appendChild(article);
  });

  // Publications
  (data.publications || []).forEach(item => {
    const article = el('article', 'publication-entry');
    text(article, 'h3', 'publication-title', item.title);
    const authorline = el('p', 'authors');
    (item.authors || []).forEach((author, i) => {
      if (i) authorline.appendChild(document.createTextNode(', '));
      authorline.appendChild(el(author === p.name ? 'strong' : 'span', '', author));
    });
    article.appendChild(authorline);
    text(article, 'p', 'venue', item.venue);
    links(article, item.links);
    if (item.contribution) text(article, 'p', 'contribution', item.contribution);
    $('publication-list').appendChild(article);
  });

  // Small technical projects
  (data.technicalProjects || []).forEach(item => {
    const article = el('article', 'technical-entry');
    text(article, 'h3', 'technical-title', item.title);
    if (item.meta) text(article, 'p', 'meta', item.meta);
    text(article, 'p', 'small-paragraph', item.description);
    if (item.result) text(article, 'p', 'result', item.result);
    links(article, item.links);
    $('technical-list').appendChild(article);
  });
  text($('footer'), 'span', '', `${p.name} · Academic research portfolio`);
})();
