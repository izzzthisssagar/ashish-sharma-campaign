export const SITE = {
  brand: { name: "Ashish Sharma", mark: "AS", homeUrl: "/" },

  // Multipage nav
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "News",
      children: [
        { label: "All News", href: "/news" },
        { label: "Campaign", href: "/news?tag=campaign" },
        { label: "Constituency", href: "/news?tag=constituency" },
      ],
    },
    { label: "Articles", href: "/articles" },
    { label: "Blogs", href: "/blogs" },
    { label: "Videos", href: "/videos" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    kicker: "Independent Candidate • Kapilvastu-1",
    title: "Ashish Sharma",
    lead:
      "A proven business leader stepping into public service. Running as an independent candidate from Kapilvastu Constituency No. 1 for the House of Representatives Election 2082.",
    pills: ["Independent", "Development", "Transparency", "Youth Empowerment", "Good Governance", "Kapilvastu-1"],
    image: { src: "/portrait.jpg", alt: "Ashish Sharma" },
    electionSymbol: { src: "/jeep-symbol.jpg", alt: "Election Symbol - Jeep" },
  },

  about: {
    teaser:
      "Ashish Sharma is a successful entrepreneur and business leader with over two decades of experience in corporate leadership. Now he's bringing his expertise in governance, finance, and development to serve the people of Kapilvastu as an independent candidate.",
    full: `Ashish Sharma is a distinguished business leader and entrepreneur who has decided to step into public service to bring meaningful change to Kapilvastu Constituency No. 1.

**Professional Background**

With an MBA from the prestigious Asian Institute of Technology, Thailand, and extensive experience at the highest levels of Nepal's corporate sector, Ashish brings a unique combination of education, expertise, and leadership to public service.

His corporate journey includes:
• **Senior General Manager at Chaudhary Group** (2003-2016) - Leading Financial Services, Telecommunications, Real Estate, Hydro Power, and Infrastructure divisions
• **Board Director at Nabil Bank Limited** (2009-2018) - One of Nepal's premier banking institutions
• **Chairman of United Insurance Company Limited** (2014-2016)
• **Executive roles in multiple hydropower projects** including Trishuli Galchi (75 MW), Super Madi (44 MW), and Middle Modi (15 MW)

Currently, he serves as:
• Managing Director, Ashviana Corporation Private Limited
• Director, Krishinery Nepal Private Limited
• Director, Sarhana Exim Private Limited

**Why Politics?**

After years of contributing to Nepal's economic development through the private sector, Ashish Sharma believes it's time to directly serve the people. He is contesting as an **independent candidate** because he believes that real development comes from putting people before party politics.

**Vision for Kapilvastu**

His focus areas include:
• **Infrastructure Development** - Better roads, electricity, and connectivity
• **Quality Education** - Improved schools and vocational training centers
• **Healthcare Access** - Upgraded health facilities and medical services
• **Youth Employment** - Creating opportunities for young people
• **Agricultural Development** - Supporting farmers with modern techniques and market access
• **Good Governance** - Transparent and accountable public service

**Election Symbol: Jeep (जीप)**

The Jeep symbolizes strength, reliability, and the ability to navigate tough terrain - qualities that Ashish Sharma brings to his candidacy. Just as a Jeep can reach the most remote areas, he is committed to reaching and serving every corner of Kapilvastu-1.`,
  },

  contact: {
    office: "Ashviana Corporation Private Limited\n#403, Oasis Business Park\n49 Dhara, Patan Dhoka\nLalitpur, Nepal",
    email: "ashish@ashviana.com",
    phone: "+977 9851061122",
  },

  cta: {
    title: "जीपलाई भोट, कपिलवस्तुको विकास",
    subtitle: "Vote for Jeep, Development for Kapilvastu",
    body: "Join the movement for independent, accountable, and development-focused representation. Together, we can build a better Kapilvastu.",
    primary: { label: "Contact Us", href: "/contact" },
    secondary: { label: "Learn More", href: "/about" },
  },

  footer: {
    quickLinks: [
      { label: "About", href: "/about" },
      { label: "News", href: "/news" },
      { label: "Articles", href: "/articles" },
      { label: "Blogs", href: "/blogs" },
      { label: "Contact", href: "/contact" },
    ],
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/share/1Js87C4Ln9/", label: "Facebook" },
      { platform: "instagram", url: "https://www.instagram.com/ashishsharma.info/", label: "Instagram" },
      { platform: "tiktok", url: "https://www.tiktok.com/@ashishsharma.info", label: "TikTok" },
      { platform: "twitter", url: "https://x.com/ashishsharmainf", label: "X (Twitter)" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/ashishsharmainfo/", label: "LinkedIn" },
    ],
    website: "ashishsharma.info",
    copyright: "© 2082 Ashish Sharma. All rights reserved.",
  },
};

// ====== Content collections (for list + detail pages) ======
export const NEWS = [
  {
    slug: "candidacy-announcement-kapilvastu-1",
    title: "Ashish Sharma Announces Independent Candidacy for Kapilvastu-1",
    excerpt: "Successful businessman Ashish Sharma files nomination as independent candidate for House of Representatives from Kapilvastu Constituency No. 1.",
    source: "Campaign",
    date: "2082-09-15",
    tags: ["campaign"],
    body: `Ashish Sharma, a renowned business leader and entrepreneur, has officially filed his nomination as an independent candidate for the House of Representatives election from Kapilvastu Constituency No. 1.

With the election symbol **Jeep (जीप)**, Sharma brings over two decades of corporate leadership experience to the political arena. His decision to contest as an independent reflects his commitment to people-centric governance over party politics.

"I have spent my career building businesses and creating jobs. Now I want to use that experience to build a better Kapilvastu," Sharma stated during his announcement.

His campaign focuses on infrastructure development, education, healthcare, youth employment, and transparent governance.`,
  },
  {
    slug: "campaign-launch-kapilvastu",
    title: "Election Campaign Officially Launched in Kapilvastu",
    excerpt: "Ashish Sharma kicks off his election campaign with a massive rally in Kapilvastu, outlining his vision for the constituency.",
    source: "Campaign",
    date: "2082-09-20",
    tags: ["campaign"],
    body: `Ashish Sharma officially launched his election campaign in Kapilvastu with an enthusiastic rally attended by thousands of supporters.

Wearing the traditional marigold garland and addressing the crowd, Sharma outlined his five-point agenda:

1. **Infrastructure First** - Prioritizing road connectivity and electricity access
2. **Education for All** - Improving school infrastructure and teacher training
3. **Healthcare Access** - Upgrading health posts and hospitals
4. **Youth Opportunities** - Creating employment and entrepreneurship programs
5. **Transparent Governance** - Accountable and corruption-free administration

"I am not here to make promises I cannot keep. I am here with a plan, experience, and dedication to serve you," he told the gathering.

The purple campaign flags with the Jeep symbol were visible throughout the venue, symbolizing the grassroots movement taking shape in Kapilvastu-1.`,
  },
  {
    slug: "constituency-development-plan",
    title: "Comprehensive Development Plan for Kapilvastu-1 Unveiled",
    excerpt: "Ashish Sharma presents a detailed blueprint for the development of Kapilvastu Constituency No. 1.",
    source: "Campaign",
    date: "2082-09-25",
    tags: ["constituency", "campaign"],
    body: `Independent candidate Ashish Sharma has released a comprehensive development plan for Kapilvastu Constituency No. 1, drawing from his extensive experience in business and infrastructure development.

**Key Highlights of the Plan:**

**Infrastructure:**
- Road connectivity to all wards
- Rural electrification projects
- Irrigation facilities for agricultural areas
- Clean drinking water projects

**Education:**
- School building renovations
- Computer labs in secondary schools
- Scholarship programs for meritorious students
- Vocational training centers

**Healthcare:**
- Upgraded birthing centers
- Mobile health camps
- Emergency medical services
- Health awareness programs

**Economic Development:**
- Agricultural support centers
- Small business loans facilitation
- Youth entrepreneurship programs
- Tourism promotion in heritage areas

"This is not just a manifesto - it's a commitment backed by my experience in executing large-scale projects," said Sharma.`,
  },
  {
    slug: "youth-interaction-program",
    title: "Interactive Session with Youth of Kapilvastu",
    excerpt: "Ashish Sharma engages with young voters, discussing employment opportunities and the future of Kapilvastu.",
    source: "Campaign",
    date: "2082-10-01",
    tags: ["constituency", "campaign"],
    body: `In a dynamic interaction session with the youth of Kapilvastu, Ashish Sharma discussed the challenges facing young people and his plans to address them.

The session, attended by hundreds of young voters, covered topics including:
- Employment opportunities within the constituency
- Reducing youth migration abroad
- Skill development and vocational training
- Supporting young entrepreneurs

Sharma shared his own journey from a management trainee to a senior business leader, emphasizing that similar opportunities should be available to youth in Kapilvastu.

"The youth are not just the future - they are the present. We need to create opportunities here so that our young people don't have to leave their homeland to find a decent living," he stated.

He announced plans for a Youth Development Fund that would provide seed capital and mentorship to young entrepreneurs in the constituency.`,
  },
  {
    slug: "door-to-door-campaign",
    title: "Door-to-Door Campaign Reaches Every Ward",
    excerpt: "Ashish Sharma's grassroots campaign reaches households across all wards of Kapilvastu-1.",
    source: "Campaign",
    date: "2082-10-10",
    tags: ["campaign"],
    body: `The independent campaign of Ashish Sharma has reached a new milestone as volunteers complete door-to-door outreach in all wards of Kapilvastu Constituency No. 1.

Unlike traditional political campaigns, Sharma's approach focuses on listening to constituents' concerns and documenting their needs.

"Every household has a story, every family has needs. We are not just distributing pamphlets - we are building a database of what our constituency truly requires," explained a campaign coordinator.

The campaign has collected feedback on:
- Infrastructure gaps
- Healthcare needs
- Education requirements
- Economic challenges
- Environmental concerns

This data-driven approach reflects Sharma's business background and commitment to evidence-based policy-making.

The Jeep symbol has become recognizable across the constituency, representing the campaign's promise to "reach every corner of Kapilvastu."`,
  },
];

export const ARTICLES = [
  {
    slug: "why-independent-candidate",
    title: "Why I Am Running as an Independent Candidate",
    excerpt: "Ashish Sharma explains his decision to enter politics without party affiliation and his vision for a different kind of representation.",
    source: "Personal",
    date: "2082-09-10",
    body: `When I decided to enter politics, many people asked me: "Why not join a political party? It would be easier."

They were right - it would be easier. But I did not choose this path because it was easy.

**The Problem with Party Politics**

Over the years, I have observed how party politics often prioritizes party interests over people's interests. Candidates are chosen not for their ability to serve, but for their loyalty to party leadership. Once elected, representatives spend more time in Kathmandu attending party meetings than in their constituencies addressing people's problems.

I believe this system has failed the people of Kapilvastu.

**Why Independent?**

As an independent candidate, I am accountable only to the people who elect me - not to any party boss, not to any central committee, not to any ideology that doesn't serve local interests.

My loyalties are simple:
1. To the constitution of Nepal
2. To the people of Kapilvastu-1
3. To the principles of honest governance

**What I Bring**

In my career, I have:
- Managed multi-billion rupee businesses
- Sat on boards of banks, insurance companies, and infrastructure projects
- Led teams of thousands of employees
- Delivered results under pressure

I bring this experience to public service.

**My Promise**

I will not make false promises. I will not blame others when things go wrong. I will be present, accountable, and focused on development.

The choice is yours: the same old party politics, or a new approach focused on results.

**जीपलाई भोट, कपिलवस्तुको विकास।**`,
  },
  {
    slug: "infrastructure-development-vision",
    title: "A Vision for Infrastructure Development in Kapilvastu",
    excerpt: "Drawing from experience in hydropower and construction, a detailed look at infrastructure priorities for Kapilvastu-1.",
    source: "Personal",
    date: "2082-09-18",
    body: `Having spent years working on infrastructure projects including hydropower plants, real estate developments, and telecommunications networks, I understand that infrastructure is the backbone of development.

**Current Challenges in Kapilvastu-1**

Our constituency faces several infrastructure challenges:
- Many rural areas lack all-weather roads
- Electricity supply is unreliable in some areas
- Irrigation facilities are inadequate for agricultural needs
- Internet connectivity is limited

**My Approach**

Infrastructure development requires three things: planning, resources, and execution. Having worked on projects ranging from 15 MW to 75 MW hydropower plants, I understand how to deliver on all three.

**Priority Projects:**

**1. Road Connectivity**
Every ward headquarters should be connected by all-weather roads. This is not optional - it is essential for economic development, healthcare access, and educational opportunities.

**2. Rural Electrification**
Building on my experience in the power sector, I will work to ensure reliable electricity reaches every household. This includes exploring solar and micro-hydro solutions for remote areas.

**3. Irrigation Systems**
Kapilvastu has tremendous agricultural potential. Modern irrigation systems can transform productivity and farmer incomes.

**4. Digital Infrastructure**
In today's world, internet connectivity is as important as road connectivity. I will push for fiber optic and mobile network expansion throughout the constituency.

**Funding and Execution**

These projects require significant investment. I will leverage my network in the private sector and my understanding of public-private partnerships to bring resources to Kapilvastu. More importantly, I will ensure transparent procurement and quality execution.

Infrastructure is not about ribbon-cutting ceremonies - it is about building things that last and serve the people.`,
  },
  {
    slug: "from-boardroom-to-public-service",
    title: "From Boardroom to Public Service: My Journey",
    excerpt: "Reflections on a career in business and the decision to serve the people of Kapilvastu.",
    source: "Personal",
    date: "2082-09-05",
    body: `My journey has taken me from a management trainee to the boardrooms of Nepal's largest corporations. Now, it brings me to the streets of Kapilvastu, seeking your vote and your trust.

**Early Career**

I joined Chaudhary Group in 2003 as a management trainee, fresh from completing my MBA at the Asian Institute of Technology in Thailand. Over the next 13 years, I rose through the ranks - from trainee to executive, to manager, to general manager, and finally to Senior General Manager.

**Learning Leadership**

At Chaudhary Group, I learned that leadership is about results, not titles. I led divisions responsible for financial services, telecommunications, real estate, and hydropower. I sat on boards of banks, insurance companies, and infrastructure projects.

But the most important lesson I learned was this: organizations succeed when leaders listen to people at every level.

**The Decision to Serve**

Why leave a successful corporate career for the uncertainty of politics?

Because I believe that the skills that helped me succeed in business - planning, execution, accountability, and people management - are exactly what our political system lacks.

I have been fortunate in my career. I have had opportunities that many in Kapilvastu have not. Now I want to use my experience to create opportunities for others.

**What Success Looks Like**

In business, success is measured in profits and growth. In public service, I will measure success differently:
- Children attending better schools
- Families accessing healthcare
- Youth finding employment at home instead of abroad
- Farmers getting fair prices for their produce
- Communities connected by good roads

This is the success I am working for.

**The Road Ahead**

The road from boardroom to public service is not smooth. Politics is different from business in many ways. But I am here to learn, to serve, and to deliver.

Thank you for considering my candidacy. I ask not just for your vote, but for your partnership in building a better Kapilvastu.`,
  },
];

export const BLOGS = [
  {
    slug: "first-day-campaigning",
    title: "First Day on the Campaign Trail",
    excerpt: "Personal reflections from the first day of meeting voters across Kapilvastu-1.",
    date: "2082-09-21",
    body: `Today was my first full day of campaigning across Kapilvastu-1, and I am both humbled and energized by what I experienced.

I started early morning in Banganga Municipality, meeting farmers heading to their fields. Their concerns were immediate and practical: irrigation water, fertilizer prices, market access. These are not abstract policy issues - they are daily struggles.

By afternoon, I was in Mayadevi Rural Municipality, visiting schools and talking to teachers. The dedication of these educators, often working with minimal resources, reminded me why education must be a priority.

In the evening, I sat with a group of young people in Suddhodhan Rural Municipality. Their frustration was palpable - educated youth with no opportunities, forced to consider going abroad just to make a living. This broke my heart.

Throughout the day, people asked me: "You are a businessman from Kathmandu. What do you know about our problems?"

It's a fair question. I told them: I am here to learn. I am here to listen. And I am here with the skills and experience to actually solve problems, not just make speeches about them.

The purple flags with the Jeep symbol are starting to appear across the constituency. But flags alone don't win elections or change lives. Only hard work and genuine commitment do.

Tomorrow, more villages, more conversations, more learning.

This is just the beginning.`,
  },
  {
    slug: "meeting-farmers-kapilvastu",
    title: "What I Learned from the Farmers of Kapilvastu",
    excerpt: "Insights from spending time with the agricultural community and understanding their challenges.",
    date: "2082-10-05",
    body: `Kapilvastu is an agricultural district, and farmers are the backbone of our economy. This week, I spent time in several villages, sitting with farmers and understanding their challenges firsthand.

**What They Told Me:**

One elderly farmer in Suddhodhan showed me his land - fertile soil that could produce much more with proper irrigation. "We depend on rain," he said. "Good monsoon, good harvest. Bad monsoon, debt."

A young farmer who had returned from working abroad shared his frustration: "I came back to farm my family land, but without modern techniques and market access, it's impossible to compete."

Women farmers talked about the burden of work without recognition: "We do the planting, weeding, harvesting, but when it's time to sell, we're told to stay home."

**What I Learned:**

1. Irrigation is the single biggest factor in agricultural productivity
2. Access to markets is as important as production
3. Agricultural extension services are nearly non-existent
4. Young people need incentives to stay in farming
5. Women's contributions must be recognized and supported

**My Commitment:**

I have worked with large agricultural and infrastructure projects. I understand what it takes to build irrigation systems, establish market linkages, and create training programs.

In Kapilvastu, I will:
- Prioritize irrigation projects using both government funds and innovative financing
- Work to establish collection centers that give farmers fair prices
- Push for agricultural training programs
- Support women farmer cooperatives
- Create incentives for youth to pursue modern farming

The farmers of Kapilvastu feed the nation. They deserve a representative who understands their needs and has the capability to address them.`,
  },
];

export const VIDEOS = [
  {
    title: "Campaign Launch Speech - Kapilvastu",
    channel: "Campaign",
    date: "2082-09-20",
    url: "#",
    description: "Ashish Sharma's speech at the campaign launch rally in Kapilvastu.",
  },
  {
    title: "Vision for Kapilvastu-1",
    channel: "Campaign",
    date: "2082-09-25",
    url: "#",
    description: "Detailed presentation of development plans for the constituency.",
  },
];

export const GALLERY = [
  { src: "/gallery/campaign-flag.jpg", alt: "Campaign Flag with Jeep Symbol" },
  { src: "/portrait.jpg", alt: "Ashish Sharma at Campaign Rally" },
];

// Election specific data
export const ELECTION = {
  constituency: "Kapilvastu-1",
  constituencyNepali: "कपिलवस्तु क्षेत्र नं. १",
  electionType: "House of Representatives",
  electionYear: "2082",
  symbol: "Jeep",
  symbolNepali: "जीप",
  slogan: "जीपलाई भोट, कपिलवस्तुको विकास",
  sloganEnglish: "Vote for Jeep, Development for Kapilvastu",
  coverageAreas: [
    "Suddhodhan Rural Municipality",
    "Mayadevi Rural Municipality",
    "Banganga Municipality",
    "Kapilvastu Municipality (Wards 8-11)"
  ],
};
