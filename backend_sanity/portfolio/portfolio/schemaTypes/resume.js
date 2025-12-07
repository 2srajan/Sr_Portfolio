export default {
    name: 'resume',
    type: 'document',
    title: 'Resume',
    fields: [
      // Education Section
      {
        name: 'education',
        type: 'array',
        title: 'Education',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'degree', type: 'string', title: 'Degree' },
              { name: 'institution', type: 'string', title: 'Institution' },
              { name: 'year', type: 'string', title: 'Year/Duration' },
            ],
            preview: {
              select: {
                title: 'degree',
                subtitle: 'institution',
              },
            },
          },
        ],
      },
  
      // Experience Section
      {
        name: 'experience',
        type: 'array',
        title: 'Experience',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'role', type: 'string', title: 'Role/Position' },
              { name: 'company', type: 'string', title: 'Company' },
              { name: 'duration', type: 'string', title: 'Duration' },
              { name: 'description', type: 'text', title: 'Description' },
            ],
            preview: {
              select: {
                title: 'role',
                subtitle: 'company',
              },
            },
          },
        ],
      },
  
      // Skills
      {
        name: 'skills',
        type: 'array',
        title: 'Skills',
        of: [{ type: 'string' }],
      },
  
      // Certifications
      {
        name: 'certifications',
        type: 'array',
        title: 'Certifications',
        of: [{ type: 'string' }],
      },
  
      // Resume PDF Upload
      {
        name: 'resumePdf',
        type: 'file',
        title: 'Resume PDF',
        options: {
          accept: 'application/pdf',
        },
      },
    ],
  };
  