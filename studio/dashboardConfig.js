export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '609b5254ab9c696ac750e710',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-g474t9i2',
                  apiId: 'b19719f6-452d-4410-a08f-d07be1e00488'
                },
                {
                  buildHookId: '609b5254266e0a650da75bb5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-4onztmt1',
                  apiId: '614c4827-d45b-4e43-be2d-1ec3a6754cde'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gabyzif/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-4onztmt1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
