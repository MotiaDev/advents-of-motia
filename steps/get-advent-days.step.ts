export const config = {
  name: 'GetAdventDays',
  type: 'api',
  path: '/api/advent-days',
  method: 'GET',
  emits: [],
  flows: ['advent-calendar'],
  virtualEmits: [{ topic: 'day.selected', label: 'User selects a day' }]
};

export const handler = async (req, { logger }) => {
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
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/github-notion-sync'
    },
    {
      day: 2,
      title: 'AI Chat Agent with Memory',
      description: 'Build an AI agent that remembers context.',
      tweetId: '1994393178154336297',
      unlocked: true,
      date: 'Tuesday',
      githubExample: 'ai-chat-agent-with-memory',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-chat-agent-with-memory'
    },
    {
      day: 3,
      title: 'AI vs AI Tic-Tac-Toe',
      description: 'Watch two AI agents battle it out.',
      tweetId: '1995552167621787887',
      unlocked: true,
      date: 'Wednesday',
      githubExample: 'ai-vs-ai-tictactoe-game',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-vs-ai-tictactoe-game'
    },
    {
      day: 4,
      title: 'Telegram & Gmail Automation',
      description: 'Automate your communication workflows.',
      tweetId: '1995900288750747884',
      unlocked: true,
      date: 'Thursday',
      githubExample: 'telegram-gmail-automation',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/telegram-gmail-automation'
    },
    {
      day: 5,
      title: 'Airbnb Guest Assistant',
      description: 'Automate guest communication for Airbnb.',
      tweetId: '1996298241550209236',
      unlocked: true,
      date: 'Friday',
      githubExample: 'airbnb-property-guest-assistant',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/airbnb-property-guest-assistant'
    },
    {
      day: 6,
      title: 'Lead Scoring with LangGraph',
      description: 'Intelligent lead scoring powered by AI.',
      tweetId: '1996730187191382320',
      unlocked: true,
      date: 'Saturday',
      githubExample: 'motia-langgraph-lead-scoring',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/motia-langgraph-lead-scoring'
    },
    {
      day: 7,
      title: 'Multi-Agent Game Gen',
      description: 'Generate games using multiple AI agents.',
      tweetId: '1997006292104499451',
      unlocked: true,
      date: 'Sunday',
      githubExample: 'multi-agent-game-generation',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/multi-agent-game-generation'
    }
  ];

  // Generate remaining days 8-30
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const allDays = [...existingDays];

  for (let i = 8; i <= 30; i++) {
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
