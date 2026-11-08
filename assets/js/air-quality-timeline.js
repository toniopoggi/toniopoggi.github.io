(() => {
  const timeline = document.querySelector('#aq-timeline');
  if (!timeline) return;

  const search = document.querySelector('#aq-search');
  const toolbar = document.querySelector('.aq-toolbar');
  const counter = document.querySelector('#aq-counter');
  const period = document.querySelector('#aq-current-period');
  const empty = document.querySelector('#aq-empty');
  const events = Array.from(timeline.querySelectorAll('.aq-event'));
  const months = Array.from(timeline.querySelectorAll('.aq-month'));
  const texts = events.map(event => event.querySelector('.aq-text').textContent.toLocaleLowerCase());
  let visibleMonths = months;

  function updatePeriod() {
    const cutoff = toolbar.getBoundingClientRect().bottom + 24;
    let current = '';
    visibleMonths.forEach(month => {
      if (month.getBoundingClientRect().top <= cutoff) current = month.textContent;
    });
    period.textContent = current;
  }

  function filter() {
    const query = search.value.trim().toLocaleLowerCase();
    const monthKeys = new Set();
    let count = 0;
    events.forEach((event, index) => {
      event.hidden = !texts[index].includes(query);
      if (!event.hidden) {
        event.classList.toggle('aq-left', count % 2 === 0);
        event.classList.toggle('aq-right', count % 2 !== 0);
        monthKeys.add(event.dataset.month);
        count += 1;
      }
    });
    months.forEach(month => { month.hidden = !monthKeys.has(month.dataset.month); });
    visibleMonths = months.filter(month => !month.hidden);
    counter.textContent = `${count} / ${events.length} ${timeline.dataset.countLabel}`;
    empty.hidden = count !== 0;
    updatePeriod();
  }

  toolbar.hidden = false;
  search.addEventListener('input', filter);
  window.addEventListener('scroll', updatePeriod, { passive: true });
  window.addEventListener('resize', updatePeriod);
  filter();
})();
