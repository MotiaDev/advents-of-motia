export const config = {
  name: 'GetAdventDays',
  type: 'api',
  path: '/api/advent-days',
  method: 'GET',
  emits: []
};

export const handler = async (req, { logger }) => {
  logger.info('Fetching all advent days');
  
  const adventDays = [
    {
      day: 1,
      title: 'GitHub to Notion Sync',
      description: 'Sync your GitHub issues to Notion seamlessly.',
      tweetId: '1994004171989692599',
      unlocked: true,
      date: '2025-12-01',
      githubExample: 'github-notion-sync',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/github-notion-sync'
    },
    {
      day: 2,
      title: 'AI Chat Agent with Memory',
      description: 'Build an AI agent that remembers context.',
      tweetId: '1994393178154336297',
      unlocked: true,
      date: '2025-12-02',
      githubExample: 'ai-chat-agent-with-memory',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-chat-agent-with-memory'
    },
    {
      day: 3,
      title: 'AI vs AI Tic-Tac-Toe',
      description: 'Watch two AI agents battle it out.',
      tweetId: '1995552167621787887',
      unlocked: true,
      date: '2025-12-03',
      githubExample: 'ai-vs-ai-tictactoe-game',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-vs-ai-tictactoe-game'
    },
    {
      day: 4,
      title: 'Telegram & Gmail Automation',
      description: 'Automate your communication workflows.',
      tweetId: '1995900288750747884',
      unlocked: true,
      date: '2025-12-04',
      githubExample: 'telegram-gmail-automation',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/telegram-gmail-automation'
    },
    {
      day: 5,
      title: 'Airbnb Guest Assistant',
      description: 'Automate guest communication for Airbnb.',
      tweetId: '1996298241550209236',
      unlocked: true,
      date: '2025-12-05',
      githubExample: 'airbnb-property-guest-assistant',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/airbnb-property-guest-assistant'
    },
    {
      day: 6,
      title: 'Lead Scoring with LangGraph',
      description: 'Intelligent lead scoring powered by AI.',
      tweetId: '1996730187191382320',
      unlocked: true,
      date: '2025-12-06',
      githubExample: 'motia-langgraph-lead-scoring',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/motia-langgraph-lead-scoring'
    },
    {
      day: 7,
      title: 'Multi-Agent Game Gen',
      description: 'Generate games using multiple AI agents.',
      tweetId: '1997006292104499451',
      unlocked: true,
      date: '2025-12-07',
      githubExample: 'multi-agent-game-generation',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/multi-agent-game-generation'
    }
  ];

  return {
    status: 200,
    body: {
      success: true,
      data: adventDays
    }
  };
};
