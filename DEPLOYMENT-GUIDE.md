# Clean URL Deployment Guide

This guide explains how to deploy your website with clean URLs (without .html extensions).

## Server Configuration Files Created

### 1. Apache Server (.htaccess)
- **File**: `.htaccess`
- **Use for**: Most shared hosting providers (cPanel, Bluehost, etc.)
- **Features**: 
  - Removes .html extensions
  - Redirects old .html URLs to clean URLs
  - Security headers
  - Compression and caching

### 2. IIS Server (web.config)
- **File**: `web.config`
- **Use for**: Windows hosting, Azure, IIS servers
- **Features**: 
  - URL rewriting rules
  - Security headers
  - Compression and caching

### 3. Nginx Server (nginx.conf)
- **File**: `nginx.conf`
- **Use for**: VPS, dedicated servers, cloud hosting
- **Features**: 
  - Server block configuration
  - Security headers
  - Compression and caching

## Deployment Instructions

### For Apache Hosting (Most Common)
1. Upload the `.htaccess` file to your website's root directory
2. Ensure your hosting provider supports mod_rewrite
3. Test the URLs:
   - `yoursite.com/Company` (should work)
   - `yoursite.com/Company.html` (should redirect to clean URL)

### For IIS Hosting
1. Upload the `web.config` file to your website's root directory
2. Ensure URL Rewrite module is installed on the server
3. Test the URLs as above

### For Nginx Hosting
1. Add the configuration from `nginx.conf` to your server block
2. Reload nginx configuration: `nginx -s reload`
3. Test the URLs as above

## URL Changes Made

### Before (with .html):
- `/index.html` → `/` (homepage)
- `/Company.html` → `/Company`
- `/Contact.html` → `/Contact`
- `/work.html` → `/work`
- `/getstart.html` → `/getstart`
- `/case-study.html` → `/case-study`

### After (clean URLs):
- `/` (homepage)
- `/Company`
- `/Contact`
- `/work`
- `/getstart`
- `/case-study`

## Testing Your Deployment

1. **Test Clean URLs**: Visit `yoursite.com/Company` - should load Company.html
2. **Test Redirects**: Visit `yoursite.com/Company.html` - should redirect to `/Company`
3. **Test Navigation**: Click internal links - should use clean URLs
4. **Test SEO**: Check that search engines can access both old and new URLs

## SEO Benefits

- ✅ **Cleaner URLs**: More professional appearance
- ✅ **Better UX**: Easier to remember and share
- ✅ **SEO Friendly**: Search engines prefer clean URLs
- ✅ **Redirects**: Old .html URLs redirect to new clean URLs (301 redirects)
- ✅ **No Broken Links**: All internal links updated

## Troubleshooting

### If Clean URLs Don't Work:
1. **Apache**: Check if mod_rewrite is enabled
2. **IIS**: Verify URL Rewrite module is installed
3. **Nginx**: Check server configuration syntax
4. **Permissions**: Ensure server can read configuration files

### If Redirects Don't Work:
1. Check server error logs
2. Verify configuration file syntax
3. Test with browser developer tools
4. Clear browser cache

## Support

If you encounter issues:
1. Check your hosting provider's documentation
2. Contact your hosting support
3. Verify server configuration requirements
4. Test with different browsers and devices
