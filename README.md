# PJN Technologies Connect - Dynamic Work Portfolio

This project demonstrates how to create a dynamic portfolio website using only frontend technologies. The work page fetches project data from a JSON file and displays it dynamically, with interactive case study modals.

## How It Works

### 1. Data Structure (`projects.json`)
The `projects.json` file acts as a simple database containing all project information:

```json
{
  "projects": [
    {
             "id": 1,
       "title": "Project Name",
       "category": "Category",
       "technology": "Technology",
       "year": "2024",
       "description": "Short description",
       "image": "assets/projects/project-name.jpg",
       "url": "https://project-url.com",
       "icon": "fas fa-icon-name",
       "gradient": "from-color-500/20 to-color-600/20",
       "iconColor": "text-color-400",
       "tagColor": "bg-color-500/20 text-color-400",
      "caseStudy": {
        "overview": "Detailed overview",
        "challenge": "What was the challenge",
        "solution": "How we solved it",
        "technologies": ["Tech1", "Tech2"],
        "results": ["Result1", "Result2"],
        "duration": "6 months",
        "teamSize": "8 developers",
        "client": "Client Name"
      }
    }
  ]
}
```

### 2. Dynamic Loading
- The `work.html` page fetches data from `projects.json` when it loads
- Projects are displayed dynamically in a responsive grid
- Each project card shows basic information with a "View Case Study" button

### 3. Case Study Pages
- Clicking "View Case Study" navigates to a dedicated case study page
- Each case study has its own URL (e.g., `case-study.html?id=1`)
- Pages display comprehensive project information
- Includes overview, challenge, solution, technologies, results, and project details
- Better for SEO and user experience

## Adding New Projects

To add a new project:

1. **Edit `projects.json`**: Add a new project object to the `projects` array
2. **Set unique ID**: Ensure each project has a unique `id` field
3. **Add case study data**: Include the `caseStudy` object for detailed information
4. **Choose icon**: Use FontAwesome icon classes (e.g., `fas fa-rocket`)
5. **Set colors**: Choose appropriate gradient and color schemes

## Features

- ✅ **No Backend Required**: Pure frontend solution
- ✅ **Dynamic Content**: Projects loaded from JSON file
- ✅ **Responsive Design**: Works on all device sizes
- ✅ **Dedicated Pages**: Individual case study pages for each project
- ✅ **Loading States**: Smooth user experience
- ✅ **Error Handling**: Fallback if data can't be loaded
- ✅ **Accessibility**: Proper ARIA labels and keyboard navigation

## File Structure

```
├── work.html          # Main work page with dynamic functionality
├── case-study.html    # Template for individual case study pages
├── projects.json      # Project data (acts as database)
├── assets/           # Images and other assets
└── README.md         # This documentation
```

## Browser Compatibility

This solution works in all modern browsers that support:
- ES6+ JavaScript (async/await, fetch API)
- CSS Grid and Flexbox
- CSS Custom Properties

## Customization

### Styling
- Modify CSS classes in `work.html` to change appearance
- Update color schemes in `projects.json`
- Adjust modal layout and content structure

### Functionality
- Add filtering by category or technology
- Implement search functionality
- Add pagination for large project lists
- Include project images or videos

## Benefits of This Approach

1. **Simple**: No server setup or database configuration
2. **Fast**: Static files load quickly
3. **Maintainable**: Easy to update project information
4. **Scalable**: Can handle hundreds of projects
5. **Portable**: Can be hosted anywhere (GitHub Pages, Netlify, etc.)
6. **Cost-effective**: No hosting or database costs

## Troubleshooting

### Projects Not Loading
- Check that `projects.json` is in the same directory as `work.html`
- Verify JSON syntax is valid
- Check browser console for error messages

### Case Study Pages Not Working
- Ensure all JavaScript is properly loaded
- Check that project IDs are unique
- Verify case study data exists for the project
- Check that `case-study.html` is in the same directory

### Styling Issues
- Confirm Tailwind CSS is loaded
- Check that custom CSS classes are properly defined
- Verify responsive breakpoints are correct
