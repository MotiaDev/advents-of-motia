import { Handlers } from 'motia';

export const config = {
  name: 'GetAdventDay',
  type: 'api',
  path: '/api/advent-days/:day',
  method: 'GET',
  emits: [],
  flows: ['advent-calendar'],
  virtualSubscribes: ['day.selected']
};

export const handler: Handlers['GetAdventDay'] = async (req, { logger }) => {
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
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/integrations/github/github-notion-sync'
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
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-agents/chat-agents/ai-chat-agent-with-memory'
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
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-agents/multi-agent-systems/ai-vs-ai-tictactoe-game'
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
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/integrations/communication/telegram-gmail-automation'
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
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-agents/specialized-agents/airbnb-property-guest-assistant'
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
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-agents/specialized-agents/motia-langgraph-lead-scoring'
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
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-agents/multi-agent-systems/multi-agent-game-generation'
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
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-agents/specialized-agents/ai-code-reviewer-agent'
    },
    {
      day: 9,
      title: 'AI App Generator',
      description: 'Generate full applications with AI.',
      tweetId: '1998431832866697358',
      unlocked: true,
      date: '2025-12-09',
      content: 'Build entire applications from natural language descriptions. This powerful example uses AI to generate complete app scaffolding, including routes, components, and business logic. Motia orchestrates the multi-step generation process for consistent, high-quality output.',
      features: ['App Scaffolding', 'Code Generation', 'Natural Language', 'Full-Stack Generation'],
      githubExample: 'ai-app-generator',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-agents/multi-agent-systems/ai-app-generator'
    },
    {
      day: 10,
      title: 'AI ReACT Agent',
      description: 'Reasoning + acting with structured tool use.',
      tweetId: '1998831335331475842',
      unlocked: true,
      date: '2025-12-10',
      content: 'Build a ReACT-style agent that reasons step-by-step and executes actions through tool calls. This example shows how Motia coordinates the reasoning loop, tool invocation, and result synthesis for robust, explainable outputs.',
      features: ['ReACT Loop', 'Tool Use', 'Step-by-Step Reasoning', 'Observations & Actions'],
      githubExample: 'ai-ReACT-agent',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-agents/specialized-agents/ai-ReACT-agent'
    },
    {
      day: 11,
      title: 'AI Planning Agent',
      description: 'Plan and execute multi-step tasks with AI.',
      tweetId: '1999217624312610824',
      unlocked: true,
      date: '2025-12-11',
      content: 'Create a planning agent that decomposes goals into ordered actions, selects the right tools, and executes them with feedback. See how Motia orchestrates planning, execution, and state updates for reliable multi-step outcomes.',
      features: ['Task Decomposition', 'Tool Selection', 'Execution Flow', 'Feedback Loop'],
      githubExample: 'ai-planning-agent',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-agents/specialized-agents/ai-planning-agent'
    },
    {
      day: 12,
      title: 'AI Reflection Deep Research Agent',
      description: 'An agent that performs deep research with reflection.',
      tweetId: '1999518364134162817',
      unlocked: true,
      date: '2025-12-12',
      content: 'Implement an advanced AI agent capable of deep research and self-reflection. This example demonstrates how to build an agent that iteratively improves its search queries and synthesizes information from multiple sources to provide comprehensive answers.',
      features: ['Deep Research', 'Self-Reflection', 'Iterative Search', 'Information Synthesis'],
      githubExample: 'ai-reflection-deep-research-agent',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-agents/specialized-agents/ai-reflection-deep-research-agent'
    },
    {
      day: 13,
      title: 'Real-time Cursor Pointers',
      description: 'Real-time collaboration with cursor pointers.',
      tweetId: '2000594456001876101',
      unlocked: true,
      date: '2025-12-13',
      content: 'Add real-time collaboration to your apps! This example demonstrates how to implement live cursor pointers using Motia\'s real-time capabilities, perfect for collaborative tools and multiplayer experiences.',
      features: ['Real-time Streaming', 'WebSockets/SSE', 'Multiplayer', 'Cursor Tracking'],
      githubExample: 'real-time-cursor-pointers',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/getting-started/real-time-cursor-pointers'
    },
    {
      day: 14,
      title: 'ProspectAI - Sales Intelligence',
      description: 'AI-powered sales intelligence and automation platform.',
      tweetId: '2000959418679353776',
      unlocked: true,
      date: '2025-12-14',
      content: 'Transform prospect research from hours to minutes! Upload CSVs to get AI-powered fit scores (0-100), collect 15+ signals including funding, news, and hiring patterns, generate personalized email drafts, and receive real-time Slack alerts. Built with Motia\'s event-driven architecture for seamless orchestration, parallel signal collection, and automatic retries.',
      features: ['AI Fit Scoring', 'Signal Collection', 'Email Generation', 'Real-time Alerts', 'Natural Language Queries'],
      githubExample: 'prospect-ai',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/ai-agents/specialized-agents/prospect-ai'
    },
    {
      day: 15,
      title: 'Todo App API',
      description: 'Complete CRUD API with TypeScript best practices.',
      tweetId: '2001288228431598068',
      unlocked: true,
      date: '2025-12-15',
      content: 'Build a production-ready Todo API from scratch! This example demonstrates CRUD operations, input validation with Zod schemas, proper error handling, and TypeScript best practices. Perfect for learning API fundamentals with Motia\'s type-safe approach and understanding how to structure backend endpoints effectively.',
      features: ['CRUD Operations', 'Zod Validation', 'Error Handling', 'TypeScript Best Practices'],
      githubExample: 'todo-app',
      githubUrl: 'https://github.com/MotiaDev/motia-examples/tree/main/examples/foundational/api-patterns/todo-app'
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
