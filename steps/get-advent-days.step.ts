import { Handlers } from 'motia';

export const config = {
  name: 'GetAdventDays',
  type: 'api',
  path: '/api/advent-days',
  method: 'GET',
  emits: [],
  flows: ['advent-calendar'],
  virtualEmits: [{ topic: 'day.selected', label: 'User selects a day' }]
};

export const handler: Handlers['GetAdventDays'] = async (req, { logger }) => {
  logger.info('Fetching all advent days');
  
  const existingDays = [
    {
      day: 1,
      title: 'GitHub to Notion Sync',
      description: 'Sync your GitHub issues to Notion seamlessly.',
      tweetId: '1994004171989692599',
      unlocked: true,
      date: 'Monday',
      githubExample: 'github-notion-sync',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/integrations/github/github-notion-sync'
    },
    {
      day: 2,
      title: 'AI Chat Agent with Memory',
      description: 'Build an AI agent that remembers context.',
      tweetId: '1994393178154336297',
      unlocked: true,
      date: 'Tuesday',
      githubExample: 'ai-chat-agent-with-memory',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-agents/chat-agents/ai-chat-agent-with-memory'
    },
    {
      day: 3,
      title: 'AI vs AI Tic-Tac-Toe',
      description: 'Watch two AI agents battle it out.',
      tweetId: '1995552167621787887',
      unlocked: true,
      date: 'Wednesday',
      githubExample: 'ai-vs-ai-tictactoe-game',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-agents/multi-agent-systems/ai-vs-ai-tictactoe-game'
    },
    {
      day: 4,
      title: 'Telegram & Gmail Automation',
      description: 'Automate your communication workflows.',
      tweetId: '1995900288750747884',
      unlocked: true,
      date: 'Thursday',
      githubExample: 'telegram-gmail-automation',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/integrations/communication/telegram-gmail-automation'
    },
    {
      day: 5,
      title: 'Airbnb Guest Assistant',
      description: 'Automate guest communication for Airbnb.',
      tweetId: '1996298241550209236',
      unlocked: true,
      date: 'Friday',
      githubExample: 'airbnb-property-guest-assistant',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-agents/specialized-agents/airbnb-property-guest-assistant'
    },
    {
      day: 6,
      title: 'Lead Scoring with LangGraph',
      description: 'Intelligent lead scoring powered by AI.',
      tweetId: '1996730187191382320',
      unlocked: true,
      date: 'Saturday',
      githubExample: 'motia-langgraph-lead-scoring',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-agents/specialized-agents/motia-langgraph-lead-scoring'
    },
    {
      day: 7,
      title: 'Multi-Agent Game Gen',
      description: 'Generate games using multiple AI agents.',
      tweetId: '1997006292104499451',
      unlocked: true,
      date: 'Sunday',
      githubExample: 'multi-agent-game-generation',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-agents/multi-agent-systems/multi-agent-game-generation'
    },
    {
      day: 8,
      title: 'AI Code Reviewer Agent',
      description: 'Automated code reviews powered by AI.',
      tweetId: '1998080301214343202',
      unlocked: true,
      date: 'Monday',
      githubExample: 'ai-code-reviewer-agent',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-agents/specialized-agents/ai-code-reviewer-agent'
    },
    {
      day: 9,
      title: 'AI App Generator',
      description: 'Generate full applications with AI.',
      tweetId: '1998431832866697358',
      unlocked: true,
      date: 'Tuesday',
      githubExample: 'ai-app-generator',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-agents/multi-agent-systems/ai-app-generator'
    },
    {
      day: 10,
      title: 'AI ReACT Agent',
      description: 'Reasoning + acting with structured tool use.',
      tweetId: '1998831335331475842',
      unlocked: true,
      date: 'Wednesday',
      githubExample: 'ai-ReACT-agent',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-agents/specialized-agents/ai-ReACT-agent'
    },
    {
      day: 11,
      title: 'AI Planning Agent',
      description: 'Plan and execute multi-step tasks with AI.',
      tweetId: '1999217624312610824',
      unlocked: true,
      date: 'Thursday',
      githubExample: 'ai-planning-agent',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-agents/specialized-agents/ai-planning-agent'
    },
    {
      day: 12,
      title: 'AI Reflection Deep Research Agent',
      description: 'An agent that performs deep research with reflection.',
      tweetId: '1999518364134162817',
      unlocked: true,
      date: 'Friday',
      githubExample: 'ai-reflection-deep-research-agent',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-agents/specialized-agents/ai-reflection-deep-research-agent'
    },
    {
      day: 13,
      title: 'Real-time Cursor Pointers',
      description: 'Real-time collaboration with cursor pointers.',
      tweetId: '2000594456001876101',
      unlocked: true,
      date: 'Saturday',
      githubExample: 'real-time-cursor-pointers',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/getting-started/real-time-cursor-pointers'
    }
  ];

  // Generate remaining days 14-30
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const allDays = [...existingDays];

  for (let i = 14; i <= 30; i++) {
    const dayOfWeek = daysOfWeek[(i - 1) % 7];
    allDays.push({
      day: i,
      title: `Day ${i} Surprise`,
      description: 'Coming soon! A new backend adventure awaits.',
      tweetId: '',
      unlocked: false,
      date: dayOfWeek,
      githubExample: '',
      githubUrl: ''
    });
  }

  return {
    status: 200,
    body: {
      success: true,
      data: allDays
    }
  };
};
