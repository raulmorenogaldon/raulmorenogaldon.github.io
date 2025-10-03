import type { ProjectContent } from './projectContentTypes'

const analyticsDashboardContent: ProjectContent = [
  {
    type: 'heading',
    level: 2,
    text: 'Project Overview',
  },
  {
    type: 'paragraph',
    text: 'The Analytics Dashboard project was born from a clear market need: businesses wanted powerful analytics tools that their teams could actually use without extensive training. Traditional analytics platforms were either too complex or too limiting.',
  },
  {
    type: 'paragraph',
    text: 'We set out to build a multi-tenant platform that combined the flexibility of custom dashboards with the simplicity of pre-built templates, all while maintaining real-time collaboration capabilities.',
  },
  {
    type: 'spacer',
    size: 'medium',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Architecture & Tech Stack',
  },
  {
    type: 'paragraph',
    text: 'The frontend is built with React and Vite for blazing-fast development and optimal production bundles. We chose Supabase for the backend, giving us real-time subscriptions, authentication, and a PostgreSQL database without the overhead of managing infrastructure.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Key Technical Decisions',
  },
  {
    type: 'list',
    items: [
      'React Query for efficient data fetching and caching',
      'D3.js for highly customizable data visualizations',
      'IndexedDB for offline-capable data storage',
      'Web Workers for heavy computational tasks',
      'WebSocket connections for real-time collaboration',
    ],
  },
  {
    type: 'paragraph',
    text: 'This stack allows us to handle large datasets efficiently while maintaining a snappy user experience, even on slower network connections.',
  },
  {
    type: 'spacer',
    size: 'medium',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Real-Time Collaboration',
  },
  {
    type: 'paragraph',
    text: 'One of the most challenging and rewarding features was implementing Google Docs-style collaboration. Multiple users can edit the same dashboard simultaneously, seeing each other\'s cursors and changes in real-time.',
  },
  {
    type: 'code',
    language: 'typescript',
    code: `// Simplified collaboration hook
export function useCollaboration(dashboardId: string) {
  const [collaborators, setCollaborators] = useState<User[]>([]);
  const [changes, setChanges] = useState<Change[]>([]);

  useEffect(() => {
    const channel = supabase
      .channel(\`dashboard:\${dashboardId}\`)
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState();
        setCollaborators(Object.values(state).flat());
      })
      .on('broadcast', { event: 'change' }, ({ payload }) => {
        setChanges(prev => [...prev, payload]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [dashboardId]);

  return { collaborators, changes };
}`,
  },
  {
    type: 'paragraph',
    text: 'We implemented operational transformation to handle conflicting edits and ensure consistency across all connected clients. This was technically complex but crucial for a seamless collaborative experience.',
  },
  {
    type: 'spacer',
    size: 'medium',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Data Visualization Engine',
  },
  {
    type: 'paragraph',
    text: 'At the heart of the platform is a flexible visualization engine built on top of D3.js. Users can create custom charts and graphs with a drag-and-drop interface, but under the hood, everything is powered by composable D3 components.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Supported Visualizations',
  },
  {
    type: 'list',
    items: [
      'Line, bar, and area charts with multiple series',
      'Scatter plots with regression lines',
      'Heat maps and calendar views',
      'Sankey diagrams for flow visualization',
      'Geographic maps with data overlays',
      'Custom composite charts combining multiple types',
    ],
  },
  {
    type: 'paragraph',
    text: 'Each visualization type is fully responsive and adapts to different screen sizes while maintaining readability. We also implemented smart defaults that automatically choose appropriate scales, colors, and layouts based on the data.',
  },
  {
    type: 'spacer',
    size: 'medium',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Optimistic UI Updates',
  },
  {
    type: 'paragraph',
    text: 'To create a snappy editing experience, we implemented optimistic updates throughout the application. When a user makes a change, the UI updates immediately while the request is sent to the server in the background.',
  },
  {
    type: 'quote',
    text: 'The dashboard feels incredibly responsive. I forget I\'m working in a web app—it just feels native.',
    author: 'Alex Rodriguez, Beta User',
  },
  {
    type: 'paragraph',
    text: 'If a request fails, we automatically roll back the change and notify the user. This gives users confidence to make changes quickly without waiting for server confirmations.',
  },
  {
    type: 'spacer',
    size: 'medium',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Performance Optimization',
  },
  {
    type: 'paragraph',
    text: 'With potentially thousands of data points being rendered and updated in real-time, performance was a critical concern. We implemented several optimization strategies:',
  },
  {
    type: 'list',
    ordered: true,
    items: [
      'Virtual scrolling for large datasets',
      'Memoization and React.memo for expensive computations',
      'Code splitting to reduce initial bundle size',
      'Progressive loading with skeleton states',
      'Debounced updates for frequently changing data',
    ],
  },
  {
    type: 'paragraph',
    text: 'We also set up automated performance regression testing that runs on every deployment, alerting us if any metrics degrade beyond acceptable thresholds.',
  },
  {
    type: 'code',
    language: 'typescript',
    code: `// Performance budget checks in CI/CD
const budgets = {
  'bundle.js': 250 * 1024, // 250 KB
  'first-contentful-paint': 1800, // 1.8s
  'time-to-interactive': 3500, // 3.5s
};`,
  },
  {
    type: 'spacer',
    size: 'medium',
  },
  {
    type: 'heading',
    level: 2,
    text: 'Results & Impact',
  },
  {
    type: 'paragraph',
    text: 'The dashboard launched to positive reception and quickly gained traction. The combination of powerful features and intuitive design resonated with users.',
  },
  {
    type: 'list',
    items: [
      '18% increase in user retention compared to the previous solution',
      '4.7/5 average user satisfaction rating',
      '2,400+ dashboards created in the first three months',
      '89% of users return within the first week',
    ],
  },
  {
    type: 'paragraph',
    text: 'The platform continues to evolve with new visualization types, integrations, and collaboration features based on user feedback.',
  },
]

export default analyticsDashboardContent
