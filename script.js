const platforms = [
  {
    t: 'ATLAS',
    d: 'Internal HR & operations platform for tasks, workflows, time tracking, registry flows and team coordination.',
    u: 'https://meutm.github.io/atlas/',
    cat: ['internal', 'ops'],
    g: ['#F0EEE9', '#A47864', '#6667AB'],
    f: true
  },
  {
    t: 'Main Website',
    d: 'The official public entry point for MEU Timișoara: identity, context, programme, access and event positioning.',
    u: 'https://meutm.github.io/meu-timisoara/',
    cat: ['public'],
    g: ['#0F4C81', '#F0EEE9', '#FFBE98'],
    f: true
  },
  {
    t: 'Participants App',
    d: 'The digital companion for participants: guide, logistics, quick access, useful information and event experience layer.',
    u: 'https://meutm.github.io/meu-timisoara-participants/',
    cat: ['participants'],
    g: ['#6667AB', '#98DDDF', '#F0EEE9'],
    f: true
  },
  {
    t: 'AEGIS Safety',
    d: 'Safety infrastructure for reporting, protection, procedures and the discreet wellbeing architecture of the event.',
    u: 'https://meutm.github.io/aegis/',
    cat: ['participants', 'ops'],
    g: ['#BE3455', '#5F4B8B', '#F0EEE9'],
    f: true
  },
  {
    t: 'Amendment Portal',
    d: 'Submission space for amendments: procedural clarity, structured flows and debate-ready documents.',
    u: 'https://meutm.github.io/meu-timisoara-amendment-portal/',
    cat: ['participants', 'ops'],
    g: ['#F5DF4D', '#939597', '#0F4C81']
  },
  {
    t: 'Position Papers',
    d: 'Platform for submitting position papers: centralisation, validation and pre-simulation preparation.',
    u: 'https://meutm.github.io/meu-timisoara-position-papers/',
    cat: ['participants', 'ops'],
    g: ['#2E5283', '#C67FAE', '#F0EEE9']
  },
  {
    t: 'Agreement Generator',
    d: 'Participation agreement generator for standardised documents, smoother signing and a cleaner administrative process.',
    u: 'https://meutm.github.io/meu-timisoara-agreement/',
    cat: ['participants', 'ops'],
    g: ['#A66E4A', '#F0EEE9', '#E3BD33']
  },
  {
    t: 'Certificate Generator',
    d: 'Certificate generator for participants, team members and contributions: fast, consistent and ready for event wrap-up.',
    u: 'https://meutm.github.io/meu-timisoara-certificate-generator/',
    cat: ['internal', 'ops'],
    g: ['#FF6F61', '#F0EEE9', '#A47864']
  },
  {
    t: 'Delegate Awards Voting',
    d: 'Voting site for delegate awards, recognition moments and a more memorable closing experience.',
    u: 'https://meutm.github.io/meu-voting/',
    cat: ['participants'],
    g: ['#BE3455', '#FFBE98', '#F0EEE9']
  },
  {
    t: 'Feedback Platform',
    d: 'Feedback platform for measuring experience, learning, logistics and the overall impact of MEU Timișoara.',
    u: 'https://meutm.github.io/meu-timisoara-feedback/',
    cat: ['participants', 'ops'],
    g: ['#A47864', '#D7E8BC', '#0F4C81']
  },
  {
    t: 'Sponsors Site',
    d: 'Dedicated sponsor site for visibility, partnerships, packages and the value proposition of the event.',
    u: 'https://meutm.github.io/meu-timisoara-sponsors/',
    cat: ['public'],
    g: ['#C9B27C', '#A47864', '#F0EEE9']
  },
  {
    t: 'Recruitment Hub',
    d: 'Participant recruitment hub for information, funnel design, applications and candidate-focused communication.',
    u: 'https://meutm.github.io/recruitment-hub/',
    cat: ['public'],
    g: ['#5F4B8B', '#FF6F61', '#F0EEE9']
  },
  {
    t: 'MEU Report 2026',
    d: 'The 2026 report site: impact, data, outcomes, transparency and the full story of the edition.',
    u: 'https://meutm.github.io/meu-report-2026/',
    cat: ['public'],
    g: ['#939597', '#F0EEE9', '#0F4C81']
  },
  {
    t: 'Visual Archive',
    d: 'Visual archive for 2026: photography, institutional memory and the aesthetic documentation of the MEU experience.',
    u: 'https://meutm.github.io/visual-archive/',
    cat: ['public'],
    g: ['#C67FAE', '#FFBE98', '#A47864']
  },
  {
    t: 'Organisation Chart',
    d: 'Organisation chart viewer for roles, teams, responsibilities and the internal architecture of the project.',
    u: 'https://meutm.github.io/organigrama/',
    cat: ['internal'],
    g: ['#98DDDF', '#2E5283', '#F0EEE9']
  },
  {
    t: 'Meet Hub',
    d: 'Internal tool for generating Google Meet links for the team, meetings and fast coordination.',
    u: 'https://meutm.github.io/meet-hub/',
    cat: ['internal', 'ops'],
    g: ['#D7E8BC', '#6667AB', '#F0EEE9']
  },
  {
    t: 'Inner Child',
    d: 'The June 1 campaign: a warmer, more human and more playful expression of the MEU Timișoara community.',
    u: 'https://meutm.github.io/meu-inner-child/',
    cat: ['public'],
    g: ['#FFBE98', '#F5DF4D', '#C67FAE']
  }
];

const grid = document.querySelector('#portal-grid');
const chips = [...document.querySelectorAll('.chip')];
const search = document.querySelector('#search');
let current = 'all';

function render() {
  const q = search.value.toLowerCase().trim();
  grid.innerHTML = '';

  platforms
    .filter((p) => (current === 'all' || p.cat.includes(current)) && (p.t + p.d + p.u + p.cat.join(' ')).toLowerCase().includes(q))
    .forEach((p, i) => {
      const a = document.createElement('a');
      a.href = p.u;
      a.target = '_blank';
      a.rel = 'noopener';
      a.className = 'card ' + (p.f ? 'featured' : '');
      a.style.setProperty('--a', p.g[0]);
      a.style.setProperty('--b', p.g[1]);
      a.style.setProperty('--c', p.g[2]);
      a.innerHTML = `
        <div class="card-inner">
          <div>
            <div class="meta"><span>${p.cat[0]}</span><span class="index">${String(i + 1).padStart(2, '0')}</span></div>
            <h2 class="title">${p.t}</h2>
            <p class="desc">${p.d}</p>
          </div>
          <div class="url"><span>${p.u.replace('https://', '')}</span><span class="launch">↗</span></div>
        </div>`;
      a.addEventListener('pointermove', (e) => {
        const r = a.getBoundingClientRect();
        a.style.setProperty('--mx', `${e.clientX - r.left}px`);
        a.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
      grid.append(a);
    });
}

chips.forEach((c) => c.addEventListener('click', () => {
  chips.forEach((x) => x.classList.remove('active'));
  c.classList.add('active');
  current = c.dataset.filter;
  render();
}));

search.addEventListener('input', render);
render();
