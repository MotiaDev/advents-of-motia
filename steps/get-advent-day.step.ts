export const config = {
  name: 'GetAdventDay',
  type: 'api',
  path: '/api/advent-days/:day',
  method: 'GET',
  emits: [],
  flows: ['advent-calendar'],
  virtualSubscribes: ['day.selected']
};

export const handler = async (req, { logger }) => {
  const dayNumber = parseInt(req.pathParams.day);
  logger.info(`Fetching advent day ${dayNumber}`);
  
  const adventDays = [
    {
      day: 1,
      title: 'GitHub to Notion Sync',
      description: 'Sync your GitHub issues to Notion seamlessly.',
      tweetId: '1994004171989692599',
      unlocked: true,
      date: '2025-12-01',
      content: 'Keep your project management in sync! This example demonstrates how to automatically create Notion pages when new GitHub issues are opened. It showcases Motia\'s ability to integrate external APIs and handle webhook events.',
      features: ['Webhook Integration', 'GitHub API', 'Notion API', 'Event Processing'],
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
      content: 'Create intelligent conversational agents. This example uses Motia\'s state management to persist chat history, allowing the AI to maintain context across multiple interactions.',
      features: ['State Management', 'OpenAI Integration', 'Context Persistence', 'Chat Interface'],
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
      content: 'A fun demonstration of multi-agent interaction. Two separate AI agents play Tic-Tac-Toe against each other, with Motia orchestrating the game state and turn-taking logic.',
      features: ['Multi-Agent System', 'Game Logic', 'State Synchronization', 'Event Driven'],
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
      content: 'Streamline your communications. This example listens for incoming Telegram messages and automatically forwards important ones to Gmail, or vice-versa, showing Motia\'s power in connecting different communication channels.',
      features: ['Telegram Bot API', 'Gmail API', 'Message Routing', 'Automation'],
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
      content: 'Enhance guest experience with automation. This assistant automatically responds to common guest inquiries, sends check-in instructions, and manages property details using AI.',
      features: ['Airbnb Integration', 'Automated Responses', 'Guest Management', 'AI Assistant'],
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
      content: 'Optimize your sales pipeline. Using LangGraph integration, this example analyzes lead data to assign quality scores, helping sales teams focus on the most promising prospects.',
      features: ['LangGraph Integration', 'Lead Scoring', 'Data Analysis', 'Sales Automation'],
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
      content: 'Pushing the boundaries of generative AI. This complex example coordinates multiple specialized AI agents (designer, coder, tester) to collaboratively generate and refine simple games.',
      features: ['Complex Workflows', 'Code Generation', 'Agent Collaboration', 'Creative AI'],
      githubExample: 'multi-agent-game-generation',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/multi-agent-game-generation'
    },
    {
      day: 8,
      title: 'AI Code Reviewer Agent',
      description: 'Automated code reviews powered by AI.',
      tweetId: '1998080301214343202',
      unlocked: true,
      date: '2025-12-08',
      content: 'Supercharge your code review process. This AI-powered agent automatically reviews pull requests, providing insightful feedback on code quality, potential bugs, and best practices. Built with Motia to orchestrate the review workflow seamlessly.',
      features: ['GitHub Integration', 'AI Code Analysis', 'PR Automation', 'Code Quality'],
      githubExample: 'ai-code-reviewer-agent',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-code-reviewer-agent'
    }
  ];

  const day = adventDays.find(d => d.day === dayNumber);

  if (!day) {
    return {
      status: 404,
      body: {
        success: false,
        error: 'Day not found'
      }
    };
  }

  return {
    status: 200,
    body: {
      success: true,
      data: day
    }
  };
};
